"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { SymbolObjectCreator } from "./object";
import { SymbolPrimitiveCreator } from "./primitive";

export const SymbolCreator: TestCasesCreator = (assertion, result): void => {

    describe("Symbol", (): void => {
        SymbolPrimitiveCreator(assertion, result);
        SymbolObjectCreator(assertion, result);
    });
};
