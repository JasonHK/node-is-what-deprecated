"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Uint16ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Uint16Array", (): void => {
        expect(assertion(new Uint16Array())).toBe(result);
        expect(assertion(new Uint16Array(0x10))).toBe(result);
        expect(assertion(new Uint16Array([0x0000, 0xFFFF]))).toBe(result);

        expect(assertion(Uint16Array.of(0x0000, 0xFFFF))).toBe(result);
        expect(assertion(Uint16Array.from([0x0000, 0xFFFF]))).toBe(result);
    });
};
