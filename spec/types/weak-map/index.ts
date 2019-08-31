"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { EmptyWeakMapCreator } from "./empty";
import { FullWeakMapCreator } from "./full";

export const WeakMapCreator: TestCasesCreator = (assertion, result): void => {

    describe("WeakMap", (): void => {
        EmptyWeakMapCreator(assertion, result);
        FullWeakMapCreator(assertion, result);
    });
};
