"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Uint16Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isUint16Array(payload: unknown): payload is Uint16Array {

    return isObject(payload) && isInstanceType(payload, Uint16Array);
}

export default isUint16Array;
