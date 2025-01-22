import { DefaultTransport } from '@internal/infra/default_transport';
import { ClientOptionBuilder, Interceptor, RestResponse, TransportOptionBuilder } from '@src/model';
import { AddressInfo } from 'net';
import * as http from 'node:http';
import { Exclude, instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Response, Serializable } from '@internal/interfaces/serializable';

class TestModel implements Serializable {
    @Reflect.metadata('path', 'orderId')
    orderId?: string;

    @Reflect.metadata('path', 'orderId1')
    orderId1?: string;

    v?: string;

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
}

class ResponseModel implements Response<RestResponse> {
    result?: string;

    static fromJson(input: string): ResponseModel {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): ResponseModel {
        return plainToClassFromExist(new ResponseModel(), jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }
}

describe('Transport Test', () => {
    let server: http.Server;
    let baseUrl: string;
    let transport: DefaultTransport;

    beforeAll((done) => {
        server = http.createServer((req, res) => {
            if (req.url!.startsWith('/no-obj')) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
            } else if (req.url!.startsWith('/no-obj2')) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ data: null, code: 20000 }));
            } else if (req.url!.startsWith('/normal-obj')) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ data: { result: req.url }, code: 20000 }));
            } else if (req.url!.startsWith('/path')) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ data: { result: req.url }, code: 20000 }));
            } else if (req.url!.startsWith('/post-body')) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                let body = '';

                req.on('data', (chunk) => {
                    body += chunk;
                });

                req.on('end', () => {
                    try {
                        const parsedBody = JSON.parse(body);
                        console.log('Received body:', parsedBody);

                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(
                            JSON.stringify({
                                data: { result: parsedBody },
                                code: 20000,
                            }),
                        );
                    } catch (err) {
                        console.error('Failed to parse body:', err);
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Invalid JSON' }));
                    }
                });
            } else {
                res.writeHead(404);
                res.end();
            }
        });

        server.listen(() => {
            const { port } = server.address() as AddressInfo;
            baseUrl = `http://localhost:${port}`;
            console.log(`Server listening on port ${port}`);

            let interceptors: Array<Interceptor> = [
                {
                    before: {
                        onFulfilled: (config) => {
                            console.log('debug: ', config.url);
                            return config;
                        },
                    },
                    after: {},
                },
            ];

            transport = new DefaultTransport(
                new ClientOptionBuilder()
                    .setSpotEndpoint(baseUrl)
                    .setTransportOption(
                        new TransportOptionBuilder().setInterceptors(interceptors).build(),
                    )
                    .build(),
                '',
            );
            done();
        });

        server.on('error', (err) => {
            console.error('Server error:', err);
        });
    });

    afterAll((done) => {
        transport.close();
        server.close(done);
    });

    test('test response', async () => {
        await transport
            .call('spot', false, 'get', '/no-obj', null, ResponseModel, false)
            .then((result: ResponseModel) => {});
        await transport
            .call('spot', false, 'get', '/no-obj2', null, ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toBeUndefined();
            });
        await transport
            .call('spot', false, 'get', '/normal-obj', null, ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toEqual('/normal-obj');
            });
    });

    test('test path', async () => {
        await transport
            .call('spot', false, 'get', '/path/test', null, ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toEqual('/path/test');
            });

        await transport
            .call('spot', false, 'get', '/path/test', new TestModel(), ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toEqual('/path/test');
            });

        let m = new TestModel();
        m.orderId = '123';
        await transport
            .call('spot', false, 'get', '/path/test/{orderId}', m, ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toEqual('/path/test/123');
            });

        m.orderId1 = '234';
        await transport
            .call('spot', false, 'get', '/path/test/{orderId}/{orderId1}', m, ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toEqual('/path/test/123/234');
            });

        m.v = 'value';
        await transport
            .call('spot', false, 'get', '/path/test/{orderId}/{orderId1}', m, ResponseModel, false)
            .then((result: ResponseModel) => {
                expect(result.result).toEqual('/path/test/123/234?v=value');
            });
    });

    test('send post', async () => {
        let m = new TestModel();
        m.orderId = '123';
        m.orderId1 = '234';
        m.v = 'value';

        await transport
            .call('spot', false, 'post', '/post-body', m, ResponseModel, false)
            .then((result: ResponseModel) => {
                let rest: any = result.result;
                expect(rest.orderId).toEqual('123');
                expect(rest.orderId1).toEqual('234');
                expect(rest.v).toEqual('value');
            });

        await transport
            .call('spot', false, 'get', '/post-body', m, ResponseModel, true)
            .then((result: ResponseModel) => {
                let rest: any = result.result;
                expect(rest.orderId).toEqual('123');
                expect(rest.orderId1).toEqual('234');
                expect(rest.v).toEqual('value');
            });
    });
});
