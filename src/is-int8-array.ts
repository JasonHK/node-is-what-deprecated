"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Int8Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isInt8Array(payload: unknown): payload is Int8Array {

    return isObject(payload) && isInstanceType(payload, Int8Array);
}

export default isInt8Array;
