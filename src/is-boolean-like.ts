"use strict";

import { isInstanceType } from "./is-instance-type";
import { isBoolean } from "./is-boolean";

/**
 * Determine whether the payload is boolean-like or not. Boolean-like means the 
 * payload is either `boolean` or object wrapped `boolean` primitive.
 * 
 * @param payload An object to be determined
 */
export function isBooleanLike(payload: unknown): payload is boolean | Boolean {

    return isBoolean(payload) || (isInstanceType(payload, Boolean) && isBoolean(payload.valueOf()));
}

export default isBooleanLike;
