"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Int32Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isInt32Array(payload: unknown): payload is Int32Array {

    return isObject(payload) && isInstanceType(payload, Int32Array);
}

export default isInt32Array;
