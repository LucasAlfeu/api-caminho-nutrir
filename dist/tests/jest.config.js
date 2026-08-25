"use strict";
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
//# sourceMappingURL=jest.config.js.map