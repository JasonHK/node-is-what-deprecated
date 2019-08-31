"use strict";

import { TestCasesCreator } from "../interfaces/test-cases-creator";

export const ErrorCreator: TestCasesCreator = (assertion, result): void => {

    test("Error", (): void => {
        expect(assertion(new Error())).toBe(result);
        expect(assertion(new Error(""))).toBe(result);
        expect(assertion(new Error("Sample Message"))).toBe(result);

        expect(assertion(new EvalError())).toBe(result);
        expect(assertion(new EvalError(""))).toBe(result);
        expect(assertion(new EvalError("Sample Message"))).toBe(result);

        expect(assertion(new RangeError())).toBe(result);
        expect(assertion(new RangeError(""))).toBe(result);
        expect(assertion(new RangeError("Sample Message"))).toBe(result);

        expect(assertion(new ReferenceError())).toBe(result);
        expect(assertion(new ReferenceError(""))).toBe(result);
        expect(assertion(new ReferenceError("Sample Message"))).toBe(result);

        expect(assertion(new SyntaxError())).toBe(result);
        expect(assertion(new SyntaxError(""))).toBe(result);
        expect(assertion(new SyntaxError("Sample Message"))).toBe(result);

        expect(assertion(new TypeError())).toBe(result);
        expect(assertion(new TypeError(""))).toBe(result);
        expect(assertion(new TypeError("Sample Message"))).toBe(result);
    });
};
