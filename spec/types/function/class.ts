"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const ECMAScriptClassCreator: TestCasesCreator = (assertion, result): void => {

    class OrdinaryClass {}
    class ExtendedOrdinaryClass extends OrdinaryClass {}

    const VariableOrdinaryClass = class VariableClass {};
    class ExtendedVariableOrdinaryClass extends VariableOrdinaryClass {}

    const VariableAnonymousOrdinaryClass = class {};
    class ExtendedVariableAnonymousOrdinaryClass extends VariableAnonymousOrdinaryClass {}

    function ConstructorFunction() {}
    // @ts-ignore
    class ExtendedConstructorFunction extends ConstructorFunction {}

    const VariableConstructorFunction = function VariableConstructorFunction() {};
    // @ts-ignore
    class ExtendedVariableConstructorFunction extends VariableConstructorFunction {}

    const VariableAnonymousConstructorFunction = function() {};
    // @ts-ignore
    class ExtendedVariableAnonymousConstructorFunction extends VariableAnonymousConstructorFunction {}

    const ProxiedOrdinaryClass = new Proxy(OrdinaryClass, {});
    class ExtendedProxiedOrdinaryClass extends ProxiedOrdinaryClass {}

    test("ECMAScript 2015 Class", (): void => {
        expect(assertion(OrdinaryClass)).toBe(result);
        expect(assertion(ExtendedOrdinaryClass)).toBe(result);

        expect(assertion(VariableOrdinaryClass)).toBe(result);
        expect(assertion(ExtendedVariableOrdinaryClass)).toBe(result);

        expect(assertion(VariableAnonymousOrdinaryClass)).toBe(result);
        expect(assertion(ExtendedVariableAnonymousOrdinaryClass)).toBe(result);

        expect(assertion(ExtendedConstructorFunction)).toBe(result);

        expect(assertion(ExtendedVariableConstructorFunction)).toBe(result);
        expect(assertion(ExtendedVariableAnonymousConstructorFunction)).toBe(result);

        expect(assertion(ProxiedOrdinaryClass)).toBe(result);
        expect(assertion(ExtendedProxiedOrdinaryClass)).toBe(result);
    });
};
