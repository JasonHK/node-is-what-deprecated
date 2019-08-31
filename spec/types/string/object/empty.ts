"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const EmptyStringObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("Empty String Object", (): void => {
        expect(assertion(Object(""))).toBe(result);
        expect(assertion(new String(""))).toBe(result);
    });
};
