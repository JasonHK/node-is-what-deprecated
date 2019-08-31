"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

import { EmptyStringObjectCreator } from "./empty";
import { FullStringObjectCreator } from "./full";

export const StringObjectCreator: TestCasesCreator = (assertion, result): void => {

    describe("String Object", (): void => {
        EmptyStringObjectCreator(assertion, result);
        FullStringObjectCreator(assertion, result);
    });
};
