"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

import { FiniteNumberPrimitiveCreator } from "./finite";
import { NonFiniteNumberPrimitiveCreator } from "./non-finite";

export const NumberPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    describe("Number Primitive", (): void => {
        FiniteNumberPrimitiveCreator(assertion, result);
        NonFiniteNumberPrimitiveCreator(assertion, result);
    });
};
