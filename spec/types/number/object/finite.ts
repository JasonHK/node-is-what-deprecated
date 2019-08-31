"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const FiniteNumberObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Finite Number Object", (): void => {
        expect(assertion(Object(0))).toBe(result);
        expect(assertion(new Number(0))).toBe(result);

        expect(assertion(Object(Number.MAX_SAFE_INTEGER))).toBe(result);
        expect(assertion(Object(Number.MIN_SAFE_INTEGER))).toBe(result);
        expect(assertion(new Number(Number.MAX_SAFE_INTEGER))).toBe(result);
        expect(assertion(new Number(Number.MIN_SAFE_INTEGER))).toBe(result);

        expect(assertion(Object(Number.MAX_VALUE))).toBe(result);
        expect(assertion(Object(Number.MIN_VALUE))).toBe(result);
        expect(assertion(new Number(Number.MAX_VALUE))).toBe(result);
        expect(assertion(new Number(Number.MIN_VALUE))).toBe(result);
    });
};
