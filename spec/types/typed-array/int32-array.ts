"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Int32ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Int32Array", (): void => {
        expect(assertion(new Int32Array())).toBe(result);
        expect(assertion(new Int32Array(0x20))).toBe(result);
        expect(assertion(new Int32Array([0x00000000, 0x7FFFFFFF, 0x80000000]))).toBe(result);

        expect(assertion(Int32Array.of(0x00000000, 0x7FFFFFFF, 0x80000000))).toBe(result);
        expect(assertion(Int32Array.from([0x00000000, 0x7FFFFFFF, 0x80000000]))).toBe(result);
    });
};
