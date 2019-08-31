"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const FiniteNumberPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("Finite Number Primitive", (): void => {
        expect(assertion(0)).toBe(result);

        expect(assertion(Number.MAX_SAFE_INTEGER)).toBe(result);
        expect(assertion(Number.MIN_SAFE_INTEGER)).toBe(result);

        expect(assertion(Number.MAX_VALUE)).toBe(result);
        expect(assertion(Number.MIN_VALUE)).toBe(result);
    });
};
