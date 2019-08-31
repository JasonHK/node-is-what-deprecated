"use strict";

import { isPrimitive } from "../src/is-primitive";

import { AssertionFunction } from "./interfaces/assertion-function";

import { ArrayCreator } from "./types/array";
import { DateCreator } from "./types/date";
import { ErrorCreator } from "./types/error";
import { FunctionCreator } from "./types/function";
import { NullCreator } from "./types/null";
import { ObjectCreator } from "./types/object";
import { RegExpCreator } from "./types/regexp";
import { TypedArrayCreator } from "./types/typed-array";
import { UndefinedCreator } from "./types/undefined";

import { BigIntObjectCreator } from "./types/bigint/object";
import { BigIntPrimitiveCreator } from "./types/bigint/primitive";

import { BooleanObjectCreator } from "./types/boolean/object";
import { BooleanPrimitiveCreator } from "./types/boolean/primitive";

import { NumberObjectCreator } from "./types/number/object";
import { NumberPrimitiveCreator } from "./types/number/primitive";

import { StringObjectCreator } from "./types/string/object";
import { StringPrimitiveCreator } from "./types/string/primitive";

import { SymbolObjectCreator } from "./types/symbol/object";
import { SymbolPrimitiveCreator } from "./types/symbol/primitive";

describe("isPrimitive()", (): void => {

    const ASSERTION: AssertionFunction = isPrimitive;

    describe("TRUE", (): void => {

        const RESULT = true;

        BigIntPrimitiveCreator(ASSERTION, RESULT);
        BooleanPrimitiveCreator(ASSERTION, RESULT);
        NumberPrimitiveCreator(ASSERTION, RESULT);
        StringPrimitiveCreator(ASSERTION, RESULT);
        SymbolPrimitiveCreator(ASSERTION, RESULT);

        NullCreator(ASSERTION, RESULT);
        UndefinedCreator(ASSERTION, RESULT);
    });

    describe("FALSE", (): void => {

        const RESULT = false;

        BigIntObjectCreator(ASSERTION, RESULT);
        BooleanObjectCreator(ASSERTION, RESULT);
        NumberObjectCreator(ASSERTION, RESULT);
        StringObjectCreator(ASSERTION, RESULT);
        SymbolObjectCreator(ASSERTION, RESULT);

        ArrayCreator(ASSERTION, RESULT);
        DateCreator(ASSERTION, RESULT);
        ErrorCreator(ASSERTION, RESULT);
        FunctionCreator(ASSERTION, RESULT);
        ObjectCreator(ASSERTION, RESULT);
        RegExpCreator(ASSERTION, RESULT);
        TypedArrayCreator(ASSERTION, RESULT);
    });
});
