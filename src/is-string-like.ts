"use strict";

import { isInstanceType } from "./is-instance-type";
import { isString } from "./is-string";

/**
 * Determine whether the payload is string-like or not. String-like means the 
 * payload is either `string` or object wrapped `string` primitive.
 * 
 * @param payload An object to be determined
 */
export function isStringLike(payload: unknown): payload is string | String {

    return isString(payload) || (isInstanceType(payload, String) && isString(payload.valueOf()));
}

export default isStringLike;
