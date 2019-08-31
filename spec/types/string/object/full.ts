"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const FullStringObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Full String Object", (): void => {
        expect(assertion(Object(" "))).toBe(result);
        expect(assertion(Object("Hello, world!"))).toBe(result);
        expect(assertion(new String(" "))).toBe(result);
        expect(assertion(new String("Hello, world!"))).toBe(result);
    });
};
