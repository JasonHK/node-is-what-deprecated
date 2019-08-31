"use strict";

import { isAnyNumberLike } from "./is-any-number-like";

/**
 * Determine whether the payload is number-like or not. Number-like means the 
 * payload is either `number` or object wrapped `number` primitive.
 * 
 * Note that only a finite number (any numbers except for `NaN`, `Infinity` or 
 * `-Infinity`) will be count as a `number`.
 * 
 * @param payload An object to be determined
 */
export function isNumberLike(payload: unknown): payload is number | Number {

    return isAnyNumberLike(payload) && Number.isFinite(payload.valueOf());
}

export default isAnyNumberLike;
