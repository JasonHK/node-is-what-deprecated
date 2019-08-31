"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Float32Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isFloat32Array(payload: unknown): payload is Float32Array {

    return isObject(payload) && isInstanceType(payload, Float32Array);
}

export default isFloat32Array;
