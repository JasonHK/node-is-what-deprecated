"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { ObjectInstanceCreator } from "./object-instance";
import { PlainObjectCreator } from "./plain-object";

export const ObjectCreator: TestCasesCreator = (assertion, result): void => {

    describe("Object", (): void => {
        PlainObjectCreator(assertion, result);
        ObjectInstanceCreator(assertion, result);
    });
};
