"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Set` or not.
 * 
 * @param payload An object to be determined
 */
export function isSet<T extends Set<any> = Set<any>>(payload: unknown): payload is T {

    return isObject(payload) && isInstanceType(payload, Set);
}

export default isSet;
