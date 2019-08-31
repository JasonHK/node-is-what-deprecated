"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const BigIntObjectCreator: TestCasesCreator = (assertion, result): void => {

    test("BigInt Object", (): void => {
        expect(assertion(Object(0n))).toBe(result);
        expect(assertion(Object(BigInt(0)))).toBe(result);
        expect(assertion(Object(BigInt("0")))).toBe(result);

        expect(assertion(Object(BigInt(Number.MAX_VALUE) + BigInt(Number.MAX_VALUE)))).toBe(result);
        expect(assertion(Object(BigInt(Number.MIN_SAFE_INTEGER) + BigInt(Number.MIN_SAFE_INTEGER)))).toBe(result);
    });
};
