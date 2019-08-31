"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Int16Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isInt16Array(payload: unknown): payload is Int16Array {

    return isObject(payload) && isInstanceType(payload, Int16Array);
}

export default isInt16Array;
