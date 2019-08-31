"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const SymbolObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Symbol Object", (): void => {
        expect(assertion(Object(Symbol()))).toBe(result);

        expect(assertion(Object(Symbol("")))).toBe(result);
        expect(assertion(Object(Symbol("Hello, world!")))).toBe(result);

        expect(assertion(Object(Symbol(0)))).toBe(result);
        expect(assertion(Object(Symbol(Number.MAX_SAFE_INTEGER)))).toBe(result);
        expect(assertion(Object(Symbol(Number.MIN_SAFE_INTEGER)))).toBe(result);
    });
};
