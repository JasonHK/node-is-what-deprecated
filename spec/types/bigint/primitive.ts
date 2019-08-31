"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const BigIntPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("BigInt Primitive", (): void => {
        expect(assertion(0n)).toBe(result);
        expect(assertion(BigInt(0))).toBe(result);
        expect(assertion(BigInt("0"))).toBe(result);

        expect(assertion(BigInt(Number.MAX_VALUE) + BigInt(Number.MAX_VALUE))).toBe(result);
        expect(assertion(BigInt(Number.MIN_SAFE_INTEGER) + BigInt(Number.MIN_SAFE_INTEGER))).toBe(result);
    });
};
