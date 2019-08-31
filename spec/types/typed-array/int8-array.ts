"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Int8ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Int8Array", (): void => {
        expect(assertion(new Int8Array())).toBe(result);
        expect(assertion(new Int8Array(0x08))).toBe(result);
        expect(assertion(new Int8Array([0x00, 0x7F, 0x80]))).toBe(result);

        expect(assertion(Int8Array.of(0x00, 0x7F, 0x80))).toBe(result);
        expect(assertion(Int8Array.from([0x00, 0x7F, 0x80]))).toBe(result);
    });
};
