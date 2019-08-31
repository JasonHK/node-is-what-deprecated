"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Uint32ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Uint32Array", (): void => {
        expect(assertion(new Uint32Array())).toBe(result);
        expect(assertion(new Uint32Array(0x20))).toBe(result);
        expect(assertion(new Uint32Array([0x00000000, 0xFFFFFFFF]))).toBe(result);

        expect(assertion(Uint32Array.of(0x00000000, 0xFFFFFFFF))).toBe(result);
        expect(assertion(Uint32Array.from([0x00000000, 0xFFFFFFFF]))).toBe(result);
    });
};
