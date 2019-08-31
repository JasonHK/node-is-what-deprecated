"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const EmptyMapCreator: TestCasesCreator = (assertion, result): void => {

    test("Empty Map", (): void => {
        expect(assertion(new Map())).toBe(result);
    });
};
