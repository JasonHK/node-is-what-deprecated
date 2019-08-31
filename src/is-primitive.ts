"use strict";

import { PrimitiveType } from "./interfaces/primitive-type";

import { isAnyNumber } from "./is-any-number";
import { isBigInt } from "./is-bigint";
import { isBoolean } from "./is-boolean";
import { isNull } from "./is-null";
import { isString } from "./is-string";
import { isSymbol } from "./is-symbol";
import { isUndefined } from "./is-undefined";

/**
 * Determine whether the payload is primitive type or not. Primitive type means 
 * the payload is not `object` and has no methods.
 * 
 * The seven primitive types JavaScript currently have are `string`, `number`, 
 * `bigint`, `boolean`, `null`, `undefined`, and `symbol`.
 * 
 * @param payload An object to be determined
 */
export function isPrimitive(payload: unknown): payload is PrimitiveType {

    return isString(payload) || isAnyNumber(payload) || isBigInt(payload) || isBoolean(payload) || isNull(payload) || isUndefined(payload) || isSymbol(payload);
}

export default isPrimitive;
