"use strict";

import { isAnyDate } from "./is-any-date";
import { isNumber } from "./is-number";

/**
 * Determine whether the payload is `Date` or not.
 * 
 * Note that only valid `Date` instance will be count as `Date`.
 * 
 * @param payload An object to be determined
 */
export function isDate(payload: unknown): payload is Date {

    return isAnyDate(payload) && isNumber(payload.getTime());
}

export default isDate;
