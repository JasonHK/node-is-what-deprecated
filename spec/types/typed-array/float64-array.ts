"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Float64ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Float64Array", (): void => {
        expect(assertion(new Float64Array())).toBe(result);
        expect(assertion(new Float64Array(0x40))).toBe(result);
        expect(assertion(new Float64Array([0, 1.7976931348623158e+308, 2.2250738585072014e-308]))).toBe(result);

        expect(assertion(Float64Array.of(0, 1.7976931348623158e+308, 2.2250738585072014e-308))).toBe(result);
        expect(assertion(Float64Array.from([0, 1.7976931348623158e+308, 2.2250738585072014e-308]))).toBe(result);
    });
};
