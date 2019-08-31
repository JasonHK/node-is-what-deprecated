"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { NumberObjectCreator } from "./object";
import { NumberPrimitiveCreator } from "./primitive";

export const NumberCreator: TestCasesCreator = (assertion, result): void => {

    describe("Number", (): void => {
        NumberPrimitiveCreator(assertion, result);
        NumberObjectCreator(assertion, result);
    });
};
