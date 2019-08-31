"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { StringObjectCreator } from "./object";
import { StringPrimitiveCreator } from "./primitive";

export const StringCreator: TestCasesCreator = (assertion, result): void => {

    describe("String", (): void => {
        StringPrimitiveCreator(assertion, result);
        StringObjectCreator(assertion, result);
    });
};
