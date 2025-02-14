import * as APIBROKER from './apibroker';
import * as NDBROKER from './ndbroker';
export const Broker = {
    ...APIBROKER,
    ...NDBROKER,
};
export namespace Broker {
    export type APIBrokerAPI = APIBROKER.APIBrokerAPI;
    export type NDBrokerAPI = NDBROKER.NDBrokerAPI;
}
