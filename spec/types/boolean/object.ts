"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const BooleanObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Boolean Object", (): void => {
        expect(assertion(Object(true))).toBe(result);
        expect(assertion(Object(false))).toBe(result);
        expect(assertion(new Boolean(true))).toBe(result);
        expect(assertion(new Boolean(false))).toBe(result);
    });
};
