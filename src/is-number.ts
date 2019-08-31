"use strict";

import { isAnyNumber } from "./is-any-number";

/**
 * Determine whether the payload is `number` or not.
 * 
 * Note that only a finite number (any numbers except for `NaN`, `Infinity` or 
 * `-Infinity`) will be count as a `number`.
 * 
 * @param payload An object to be determined
 */
export function isNumber(payload: unknown): payload is number {

    return isAnyNumber(payload) && Number.isFinite(payload);
}

export default isNumber;
