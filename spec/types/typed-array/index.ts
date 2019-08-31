"use strict";

import { TestCasesCreator } from "../../interfaces/test-cases-creator";

import { Float32ArrayCreator } from "./float32-array";
import { Float64ArrayCreator } from "./float64-array";
import { Int8ArrayCreator } from "./int8-array";
import { Int16ArrayCreator } from "./int16-array";
import { Int32ArrayCreator } from "./int32-array";
import { Uint8ArrayCreator } from "./uint8-array";
import { Uint8ClampedArrayCreator } from "./uint8-clamped-array";
import { Uint16ArrayCreator } from "./uint16-array";
import { Uint32ArrayCreator } from "./uint32-array";

export const TypedArrayCreator: TestCasesCreator = (assertion, result): void => {

    describe("TypedArray", (): void => {
        Int8ArrayCreator(assertion, result);
        Uint8ArrayCreator(assertion, result);
        Uint8ClampedArrayCreator(assertion, result);
        Int16ArrayCreator(assertion, result);
        Uint16ArrayCreator(assertion, result);
        Int32ArrayCreator(assertion, result);
        Uint32ArrayCreator(assertion, result);
        Float32ArrayCreator(assertion, result);
        Float64ArrayCreator(assertion, result);
    });
};
