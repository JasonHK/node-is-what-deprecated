"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Promise` or not.
 * 
 * @param payload An object to be determined
 */
export function isPromise<T = any>(payload: unknown): payload is Promise<T> {

    return isObject(payload) && isInstanceType(payload, Promise);
}

export default isPromise;
