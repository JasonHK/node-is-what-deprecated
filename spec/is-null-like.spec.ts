"use strict";

import { isNullLike } from "../src/is-null-like";

import { AssertionFunction } from "./interfaces/assertion-function";

import { ArrayCreator } from "./types/array";
import { BigIntCreator } from "./types/bigint";
import { BooleanCreator } from "./types/boolean";
import { DateCreator } from "./types/date";
import { ErrorCreator } from "./types/error";
import { FunctionCreator } from "./types/function";
import { NullCreator } from "./types/null";
import { NumberCreator } from "./types/number";
import { ObjectCreator } from "./types/object";
import { RegExpCreator } from "./types/regexp";
import { StringCreator } from "./types/string";
import { SymbolCreator } from "./types/symbol";
import { TypedArrayCreator } from "./types/typed-array";
import { UndefinedCreator } from "./types/undefined";

describe("isNullLike()", (): void => {

    const ASSERTION: AssertionFunction = isNullLike;

    describe("TRUE", (): void => {

        const RESULT = true;

        NullCreator(ASSERTION, RESULT);
        UndefinedCreator(ASSERTION, RESULT);
    });

    describe("FALSE", (): void => {

        const RESULT = false;

        ArrayCreator(ASSERTION, RESULT);
        BigIntCreator(ASSERTION, RESULT);
        BooleanCreator(ASSERTION, RESULT);
        DateCreator(ASSERTION, RESULT);
        ErrorCreator(ASSERTION, RESULT);
        FunctionCreator(ASSERTION, RESULT);
        NumberCreator(ASSERTION, RESULT);
        ObjectCreator(ASSERTION, RESULT);
        RegExpCreator(ASSERTION, RESULT);
        StringCreator(ASSERTION, RESULT);
        SymbolCreator(ASSERTION, RESULT);
        TypedArrayCreator(ASSERTION, RESULT);
    });
});
