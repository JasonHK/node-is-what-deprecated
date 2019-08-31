"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

export const FullMapCreator: TestCasesCreator = (assertion, result): void => {

    const InsertedOnInitialization: Map<any, any> = new Map<any, any>([
        ["Hello", "world"],
        [0, 1],
        [0n, 1n],
        [true, false],
        [null, null],
        [undefined, undefined],
        [Symbol("Hello"), Symbol("world")],
        [{}, new Map()],
    ]);

    const InsertedAfterInitialization: Map<any, any> = new Map();
    InsertedAfterInitialization.set("Hello", "world");
    InsertedAfterInitialization.set(0, 1);
    InsertedAfterInitialization.set(0n, 1n);
    InsertedAfterInitialization.set(true, false);
    InsertedAfterInitialization.set(null, null),
    InsertedAfterInitialization.set(undefined, undefined);
    InsertedAfterInitialization.set(Symbol("Hello"), Symbol("world")),
    InsertedAfterInitialization.set({}, new Map());

    test("Full Map", (): void => {
        expect(assertion(InsertedOnInitialization)).toBe(result);
        expect(assertion(InsertedAfterInitialization)).toBe(result);
    });
};
