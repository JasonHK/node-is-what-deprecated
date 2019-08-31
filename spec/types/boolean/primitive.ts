"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const BooleanPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("Boolean Primitive", (): void => {
        expect(assertion(true)).toBe(result);
        expect(assertion(false)).toBe(result);
    });
};
