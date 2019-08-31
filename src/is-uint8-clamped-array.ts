"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Uint8ClampedArray` or not.
 * 
 * @param payload An object to be determined
 */
export function isUint8ClampedArray(payload: unknown): payload is Uint8ClampedArray {

    return isObject(payload) && isInstanceType(payload, Uint8ClampedArray);
}

export default isUint8ClampedArray;
