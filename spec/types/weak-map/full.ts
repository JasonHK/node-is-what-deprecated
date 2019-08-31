"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const FullWeakMapCreator: TestCasesCreator = (assertion, result): void => {

    const InsertedOnInitialization: WeakMap<object, any> = new WeakMap<object, any>([
        [Object("Hello"), "world"],
        [Object(0), 1],
        [Object(0n), 1n],
        [Object(true), false],
        [Object(null), null],
        [Object(undefined), undefined],
        [Object(Symbol("Hello")), Symbol("world")],
        [Object({}), new WeakMap()],
    ]);

    const InsertedAfterInitialization: WeakMap<object, any> = new WeakMap();
    InsertedAfterInitialization.set(Object("Hello"), "world");
    InsertedAfterInitialization.set(Object(0), 1);
    InsertedAfterInitialization.set(Object(0n), 1n);
    InsertedAfterInitialization.set(Object(true), false);
    InsertedAfterInitialization.set(Object(null), null),
    InsertedAfterInitialization.set(Object(undefined), undefined);
    InsertedAfterInitialization.set(Object(Symbol("Hello")), Symbol("world")),
    InsertedAfterInitialization.set(Object({}), new WeakMap());

    test("Full WeakMap", (): void => {
        expect(assertion(InsertedOnInitialization)).toBe(result);
        expect(assertion(InsertedAfterInitialization)).toBe(result);
    });
};
