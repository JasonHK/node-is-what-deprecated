"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const FullArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Full Array", (): void => {
        expect(assertion(["Hello, world!"])).toBe(result);
        expect(assertion(Object(["Hello, world!"]))).toBe(result);
        expect(assertion(new Array("Hello, world!"))).toBe(result);

        expect(assertion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(result);
        expect(assertion(Object([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))).toBe(result);
        expect(assertion(new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9))).toBe(result);
    });
};
