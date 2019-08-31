"use strict";

import { isString } from "./is-string";

/**
 * Determine whether the payload is `string` and also empty.
 * 
 * @param payload An object to be determined
 */
export function isEmptyString(payload: unknown): payload is string {

    return isString(payload) && (payload.length === 0);
}

export default isEmptyString;
