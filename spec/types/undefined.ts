"use strict";

import { TestCasesCreator } from "../interfaces/test-cases-creator";

export const UndefinedCreator: TestCasesCreator = (assertion, result): void => {

    test("Undefined", (): void => {
        expect(assertion(undefined)).toBe(result);
    });
};
