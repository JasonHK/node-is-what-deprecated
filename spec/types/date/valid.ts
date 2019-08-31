"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const ValidDateCreator: TestCasesCreator = (assertion, result): void => {

    test("Valid Date", (): void => {
        expect(assertion(new Date())).toBe(result);

        expect(assertion(new Date(867686400000))).toBe(result);
        expect(assertion(new Date("1997-07-01T00:00:00+08:00"))).toBe(result);
        expect(assertion(new Date("Tue, 1 Jul 1997 00:00:00 GMT+0800"))).toBe(result);
        
        expect(assertion(new Date(1997, 7, 1, 0, 0, 0))).toBe(result);
    });
};
