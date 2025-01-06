package com.kucoin.universal.sdk.plugin;

import org.junit.jupiter.api.Test;
import org.openapitools.codegen.ClientOptInput;
import org.openapitools.codegen.DefaultGenerator;
import org.openapitools.codegen.config.CodegenConfigurator;

public class SdkGeneratorTest {

    private static final String SDK_NAME = "node-sdk";
    private static final String SPEC_NAME = "../../spec/rest/api/openapi-spot-order.json";
    private static final String SPEC_ENTRY_NAME = "../../spec/rest/entry/openapi-spot.json";
    private static final String WS_SPEC_NAME = "../../spec/ws/openapi-futures-private.json";
    private static final String OUTPUT_DIR = "../../sdk/node/src/generate";

    @Test
    public void launchCodeGenerator() {
        {
            final CodegenConfigurator configurator = new CodegenConfigurator()
                    .setGeneratorName(SDK_NAME)
                    .setInputSpec(SPEC_NAME)
                    .setValidateSpec(false)
                    .addAdditionalProperty("GEN_MODE", "API")
                    .setOutputDir(OUTPUT_DIR);

            final ClientOptInput clientOptInput = configurator.toClientOptInput();
            DefaultGenerator generator = new DefaultGenerator();
            generator.opts(clientOptInput).generate();
        }
        {
            final CodegenConfigurator configurator = new CodegenConfigurator()
                    .setGeneratorName(SDK_NAME)
                    .setInputSpec(SPEC_ENTRY_NAME)
                    .setValidateSpec(false)
                    .addAdditionalProperty("GEN_MODE", "ENTRY")
                    .setOutputDir(OUTPUT_DIR);

            final ClientOptInput clientOptInput = configurator.toClientOptInput();
            DefaultGenerator generator = new DefaultGenerator();
            generator.opts(clientOptInput).generate();
        }

        {
            final CodegenConfigurator configurator = new CodegenConfigurator()
                    .setGeneratorName(SDK_NAME)
                    .setInputSpec(SPEC_NAME)
                    .setValidateSpec(false)
                    .addAdditionalProperty("GEN_MODE", "TEST")
                    .setOutputDir(OUTPUT_DIR);

            final ClientOptInput clientOptInput = configurator.toClientOptInput();
            DefaultGenerator generator = new DefaultGenerator();
            generator.opts(clientOptInput).generate();
        }
    }

    @Test
    public void launchCodeGeneratorWs() {
        {
            final CodegenConfigurator configurator = new CodegenConfigurator()
                    .setGeneratorName(SDK_NAME)
                    .setInputSpec(WS_SPEC_NAME)
                    .setValidateSpec(false)
                    .addAdditionalProperty("GEN_MODE", "WS")
                    .setOutputDir(OUTPUT_DIR);

            final ClientOptInput clientOptInput = configurator.toClientOptInput();
            DefaultGenerator generator = new DefaultGenerator();
            generator.opts(clientOptInput).generate();
        }

        {
            final CodegenConfigurator configurator = new CodegenConfigurator()
                    .setGeneratorName(SDK_NAME)
                    .setInputSpec(WS_SPEC_NAME)
                    .setValidateSpec(false)
                    .addAdditionalProperty("GEN_MODE", "WS_TEST")
                    .setOutputDir(OUTPUT_DIR);

            final ClientOptInput clientOptInput = configurator.toClientOptInput();
            DefaultGenerator generator = new DefaultGenerator();
            generator.opts(clientOptInput).generate();
        }
    }

    @Test
    public void launchCodeGeneratorTemplate() {
        {
            final CodegenConfigurator configurator = new CodegenConfigurator()
                    .setGeneratorName(SDK_NAME)
                    .setInputSpec(SPEC_NAME)
                    .setValidateSpec(false)
                    .addAdditionalProperty("GEN_MODE", "test_template")
                    .setOutputDir(OUTPUT_DIR);

            final ClientOptInput clientOptInput = configurator.toClientOptInput();
            DefaultGenerator generator = new DefaultGenerator();
            generator.opts(clientOptInput).generate();
        }
    }
}