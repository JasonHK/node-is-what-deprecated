"use strict";

import { isFunction } from "./is-function";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is any `object` or `function` except for 
 * `null`.
 * 
 * @param payload An object to be determined
 */
export function isAnyObject<T extends object = any>(payload: unknown): payload is T {

    return isObject(payload) || isFunction(payload);
}

export default isAnyObject;
