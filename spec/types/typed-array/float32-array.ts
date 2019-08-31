"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const Float32ArrayCreator: TestCasesCreator = (assertion, result): void => {

    test("Float32Array", (): void => {
        expect(assertion(new Float32Array())).toBe(result);
        expect(assertion(new Float32Array(0x20))).toBe(result);
        expect(assertion(new Float32Array([0, 3.402823466e+38, 1.175494351e-38]))).toBe(result);

        expect(assertion(Float32Array.of(0, 3.402823466e+38, 1.175494351e-38))).toBe(result);
        expect(assertion(Float32Array.from([0, 3.402823466e+38, 1.175494351e-38]))).toBe(result);
    });
};
