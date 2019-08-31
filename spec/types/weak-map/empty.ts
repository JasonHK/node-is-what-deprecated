"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const EmptyWeakMapCreator: TestCasesCreator = (assertion, result): void => {

    test("Empty WeakMap", (): void => {
        expect(assertion(new WeakMap())).toBe(result);
    });
};
