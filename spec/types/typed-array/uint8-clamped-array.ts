"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Uint8ClampedArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Uint8ClampedArray", (): void => {
        expect(assertion(new Uint8ClampedArray())).toBe(result);
        expect(assertion(new Uint8ClampedArray(0x08))).toBe(result);
        expect(assertion(new Uint8ClampedArray([0x00, 0xFF]))).toBe(result);

        expect(assertion(Uint8ClampedArray.of(0x00, 0xFF))).toBe(result);
        expect(assertion(Uint8ClampedArray.from([0x00, 0xFF]))).toBe(result);
    });
};
