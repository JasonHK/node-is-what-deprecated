"use strict";

import { TestCasesCreator } from "../interfaces/test-cases-creator";

export const RegExpCreator: TestCasesCreator = (assertion, result): void => {

    test("RegExp", (): void => {
        expect(assertion(new RegExp(""))).toBe(result);

        expect(assertion(/./)).toBe(result);
        expect(assertion(new RegExp("."))).toBe(result);
    });
};
