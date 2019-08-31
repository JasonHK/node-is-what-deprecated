"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const EmptyArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Empty Array", (): void => {
        expect(assertion([])).toBe(result);
        expect(assertion(Object([]))).toBe(result);
        expect(assertion(new Array())).toBe(result);
    });
};
