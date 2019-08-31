"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `WeakMap` or not.
 * 
 * @param payload An object to be determined
 */
export function isWeakMap<T extends WeakMap<object, any> = WeakMap<object, any>>(payload: unknown): payload is T {

    return isObject(payload) && isInstanceType(payload, WeakMap);
}

export default isWeakMap;
