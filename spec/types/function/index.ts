"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { ECMAScriptClassCreator } from "./class";
import { StandardFunctionCreator } from "./function";

export const FunctionCreator: TestCasesCreator = (assertion, result): void => {

    describe("Function", (): void => {
        StandardFunctionCreator(assertion, result);
        ECMAScriptClassCreator(assertion, result);
    });
};
