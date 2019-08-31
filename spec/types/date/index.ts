"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { InvalidDateCreator } from "./invalid";
import { ValidDateCreator } from "./valid";

export const DateCreator: TestCasesCreator = (assertion, result): void => {

    describe("Date", (): void => {
        ValidDateCreator(assertion, result);
        InvalidDateCreator(assertion, result);
    });
};
