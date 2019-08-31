"use strict";

import { AssertionFunction } from "./assertion-function";

export type TestCasesCreator = (assertion: AssertionFunction, result: boolean) => void;
