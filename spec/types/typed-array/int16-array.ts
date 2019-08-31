"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Int16ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Int16Array", (): void => {
        expect(assertion(new Int16Array())).toBe(result);
        expect(assertion(new Int16Array(0x10))).toBe(result);
        expect(assertion(new Int16Array([0x0000, 0x7FFF, 0x8000]))).toBe(result);

        expect(assertion(Int16Array.of(0x0000, 0x7FFF, 0x8000))).toBe(result);
        expect(assertion(Int16Array.from([0x0000, 0x7FFF, 0x8000]))).toBe(result);
    });
};
