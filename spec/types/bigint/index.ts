"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { BigIntObjectCreator } from "./object";
import { BigIntPrimitiveCreator } from "./primitive";

export const BigIntCreator: TestCasesCreator = (assertion, result): void => {

    describe("BigInt", (): void => {
        BigIntPrimitiveCreator(assertion, result);
        BigIntObjectCreator(assertion, result);
    });
};
