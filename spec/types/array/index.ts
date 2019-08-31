"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { EmptyArrayCreator } from "./empty";
import { FullArrayCreator } from "./full";

export const ArrayCreator: TestCasesCreator = (assertion, result): void => {

    describe("Array", (): void => {
        EmptyArrayCreator(assertion, result);
        FullArrayCreator(assertion, result);
    });
};
