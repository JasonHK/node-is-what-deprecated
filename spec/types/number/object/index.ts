"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

import { FiniteNumberObjectCreator } from "./finite";
import { NonFiniteNumberObjectCreator } from "./non-finite";

export const NumberObjectCreator: TestCasesCreator = (assertion, result): void => {

    describe("Number Object", (): void => {
        FiniteNumberObjectCreator(assertion, result);
        NonFiniteNumberObjectCreator(assertion, result);
    });
};
