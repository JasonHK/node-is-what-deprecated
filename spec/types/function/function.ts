"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const StandardFunctionCreator: TestCasesCreator = (assertion, result): void => {

    function OrdinaryFunction() {}

    const VariableFunction = Function();
    const VariableNewFunction = new Function();

    const VariableOrdinaryFunction = function VariableFunction() {};
    const VariableAnonymousOrdinaryFunction = function() {};

    const VariableArrowFunction = () => {};

    class ClassWithFunction {
        public OrdinaryFunction() {}
        public VariableOrdinaryFunction = function VariableOrdinaryFunction() {};
    }

    const ProxiedOrdinaryFunction = new Proxy(OrdinaryFunction, {});

    test("Standard Function", (): void => {
        expect(assertion(OrdinaryFunction)).toBe(result);

        expect(assertion(VariableFunction)).toBe(result);
        expect(assertion(VariableNewFunction)).toBe(result);

        expect(assertion(VariableOrdinaryFunction)).toBe(result);
        expect(assertion(VariableAnonymousOrdinaryFunction)).toBe(result);

        expect(assertion(VariableArrowFunction)).toBe(result);

        const InstanceWithFunction: ClassWithFunction = new ClassWithFunction();
        expect(assertion(InstanceWithFunction.OrdinaryFunction)).toBe(result);
        expect(assertion(InstanceWithFunction.VariableOrdinaryFunction)).toBe(result);

        expect(assertion(ProxiedOrdinaryFunction)).toBe(result);
    });
};
