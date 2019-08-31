"use strict";

import { TestCasesCreator } from "../../../interfaces/test-cases-creator";

import { EmptyStringPrimitiveCreator } from "./empty";
import { FullStringPrimitiveCreator } from "./full";

export const StringPrimitiveCreator: TestCasesCreator = (assertion, result): void => {

    describe("String Primitive", (): void => {
        EmptyStringPrimitiveCreator(assertion, result);
        FullStringPrimitiveCreator(assertion, result);
    });
};
