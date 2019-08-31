"use strict";

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: "spec",
    testPathIgnorePatterns: [
        "/node_modules/",
        "/src/interfaces/",
    ],
};
