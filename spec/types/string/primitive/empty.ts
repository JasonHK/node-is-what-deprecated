"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const EmptyStringPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("Empty String Primitive", (): void => {
        expect(assertion("")).toBe(result);
    });
};
