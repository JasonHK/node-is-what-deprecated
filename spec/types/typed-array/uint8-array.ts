"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Uint8ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Uint8Array", (): void => {
        expect(assertion(new Uint8Array())).toBe(result);
        expect(assertion(new Uint8Array(0x08))).toBe(result);
        expect(assertion(new Uint8Array([0x00, 0xFF]))).toBe(result);

        expect(assertion(Uint8Array.of(0x00, 0xFF))).toBe(result);
        expect(assertion(Uint8Array.from([0x00, 0xFF]))).toBe(result);
    });
};
