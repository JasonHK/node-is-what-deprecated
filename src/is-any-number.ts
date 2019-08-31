"use strict";

/**
 * Determine whether the payload is `number` or not.
 * 
 * Note that all valid number (including `NaN`, `Infinity` or `-Infinity`) will 
 * be count as a `number`.
 * 
 * @param payload An object to be determined
 */
export function isAnyNumber(payload: unknown): payload is number {

    return typeof payload === "number";
}

export default isAnyNumber;
