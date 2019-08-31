"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { EmptyMapCreator } from "./empty";
import { FullMapCreator } from "./full";

export const MapCreator: TestCasesCreator = (assertion, result): void => {

    describe("Map", (): void => {
        EmptyMapCreator(assertion, result);
        FullMapCreator(assertion, result);
    });
};
