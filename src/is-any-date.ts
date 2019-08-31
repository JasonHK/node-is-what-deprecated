"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Date` or not.
 * 
 * Note that any `Date` instance (including invalid one) will be counted as 
 * `Date`.
 * 
 * @param payload An object to be determined
 */
export function isAnyDate(payload: unknown): payload is Date {

    return isObject(payload) && isInstanceType(payload, Date);
}

export default isAnyDate;
