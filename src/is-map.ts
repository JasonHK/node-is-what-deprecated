"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Map` or not.
 * 
 * @param payload An object to be determined
 */
export function isMap<T extends Map<any, any> = Map<any, any>>(payload: unknown): payload is T {

    return isObject(payload) && isInstanceType(payload, Map);
}

export default isMap;
