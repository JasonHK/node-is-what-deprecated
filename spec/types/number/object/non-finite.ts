"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const NonFiniteNumberObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Non-finite Number Object", (): void => {
        expect(assertion(Object(Number.NaN))).toBe(result);
        expect(assertion(new Number(Number.NaN))).toBe(result);
        
        expect(assertion(Object(Number.POSITIVE_INFINITY))).toBe(result);
        expect(assertion(Object(Number.NEGATIVE_INFINITY))).toBe(result);
        expect(assertion(new Number(Number.POSITIVE_INFINITY))).toBe(result);
        expect(assertion(new Number(Number.NEGATIVE_INFINITY))).toBe(result);
    });
};
