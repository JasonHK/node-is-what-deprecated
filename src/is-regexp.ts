"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `RegExp` or not.
 * 
 * @param payload An object to be determined
 */
export function isRegExp(payload: unknown): payload is RegExp {

    return isObject(payload) && isInstanceType(payload, RegExp);
}

export default isRegExp;
