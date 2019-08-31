"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

export const FullStringPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    test("Full String Primitive", (): void => {
        expect(assertion(" ")).toBe(result);
        expect(assertion("Hello, world!")).toBe(result);
    });
};
