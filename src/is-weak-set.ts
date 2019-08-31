"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `WeakSet` or not.
 * 
 * @param payload An object to be determined
 */
export function isWeakSet<T extends WeakSet<object> = WeakSet<object>>(payload: unknown): payload is T {

    return isObject(payload) && isInstanceType(payload, WeakSet);
}

export default isWeakSet;
