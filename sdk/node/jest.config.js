const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['reflect-metadata'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    silent: false,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
