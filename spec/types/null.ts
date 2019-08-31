"use strict";

import { TestCasesCreator } from "../interfaces/test-cases-creator";

export const NullCreator: TestCasesCreator = (assertion, result): void => {

    test("Null", (): void => {
        expect(assertion(null)).toBe(result);
    });
};
