"use strict";

import { isInstanceType } from "./is-instance-type";
import { isAnyNumber } from "./is-any-number";

/**
 * Determine whether the payload is number-like or not. Number-like means the 
 * payload is either `number` or object wrapped `number` primitive.
 * 
 * Note that all valid number (including `NaN`, `Infinity` or `-Infinity`) will 
 * be count as a `number`.
 * 
 * @param payload An object to be determined
 */
export function isAnyNumberLike(payload: unknown): payload is number | Number {

    return isAnyNumber(payload) || (isInstanceType(payload, Number) && isAnyNumber(payload.valueOf()));
}

export default isAnyNumberLike;
