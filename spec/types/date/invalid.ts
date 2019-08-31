"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const InvalidDateCreator: TestCasesCreator = (assertion, result): void => {

    test("Invalid Date", (): void => {
        expect(assertion(new Date(""))).toBe(result);
    });
};
