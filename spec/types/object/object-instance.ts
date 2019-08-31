"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const ObjectInstanceCreator: TestCasesCreator = (assertion, result): void => {

    class OrdinaryClass {}
    function ConstructorFunction() {}

    test("Object Instance", (): void => {
        expect(assertion(new OrdinaryClass())).toBe(result);
        expect(assertion(new ConstructorFunction())).toBe(result);
    });
};
