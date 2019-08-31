"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Uint8Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isUint8Array(payload: unknown): payload is Uint8Array {

    return isObject(payload) && isInstanceType(payload, Uint8Array);
}

export default isUint8Array;
