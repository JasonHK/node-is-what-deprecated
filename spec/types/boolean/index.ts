"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { BooleanObjectCreator } from "./object";
import { BooleanPrimitiveCreator } from "./primitive";

export const BooleanCreator: TestCasesCreator = (assertion, result): void => {

    describe("Boolean", (): void => {
        BooleanPrimitiveCreator(assertion, result);
        BooleanObjectCreator(assertion, result);
    });
};
