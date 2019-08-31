"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Uint32Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isUint32Array(payload: unknown): payload is Uint32Array {

    return isObject(payload) && isInstanceType(payload, Uint32Array);
}

export default isUint32Array;
