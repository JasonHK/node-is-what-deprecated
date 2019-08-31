"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Float64Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isFloat64Array(payload: unknown): payload is Float64Array {

    return isObject(payload) && isInstanceType(payload, Float64Array);
}

export default isFloat64Array;
