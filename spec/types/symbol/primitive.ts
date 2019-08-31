"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const SymbolPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("Symbol Primitive", (): void => {
        expect(assertion(Symbol())).toBe(result);

        expect(assertion(Symbol(""))).toBe(result);
        expect(assertion(Symbol("Hello, world!"))).toBe(result);

        expect(assertion(Symbol(0))).toBe(result);
        expect(assertion(Symbol(Number.MAX_SAFE_INTEGER))).toBe(result);
        expect(assertion(Symbol(Number.MIN_SAFE_INTEGER))).toBe(result);
    });
};
