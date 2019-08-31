"use strict";

import { isInstanceType } from "./is-instance-type";
import { isObject } from "./is-object";

/**
 * Determine whether the payload is `Error` or not.
 * 
 * @param payload An object to be determined
 */
export function isError(payload: unknown): payload is Error {

    return isObject(payload) && isInstanceType(payload, Error);
}

export default isError;
