"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const PlainObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Plain Object", (): void => {
        expect(assertion({})).toBe(result);
        expect(assertion(Object({}))).toBe(result);
        expect(assertion(new Object({}))).toBe(result);
    });
};
