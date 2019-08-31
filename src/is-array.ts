"use strict";

import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Array` or not.
 * 
 * @param payload An object to be determined
 */
export function isArray<T extends any[] = any[]>(payload: unknown): payload is T {

    return isObject(payload) && Array.isArray(payload);
}

export default isArray;
