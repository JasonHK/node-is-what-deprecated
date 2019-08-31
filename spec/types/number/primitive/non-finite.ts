"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const NonFiniteNumberPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("Non-finite Number Primitive", (): void => {
        expect(assertion(Number.NaN)).toBe(result);
        
        expect(assertion(Number.POSITIVE_INFINITY)).toBe(result);
        expect(assertion(Number.NEGATIVE_INFINITY)).toBe(result);
    });
};
