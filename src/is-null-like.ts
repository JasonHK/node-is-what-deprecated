"use strict";

import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

/**
 * Determine whether the payload is null-like or not. Null-like means the 
 * payload is either `null` or `undefined`.
 * 
 * @param payload An object to be determined
 */
export function isNullLike(payload: unknown): payload is null | undefined {

    return isNull(payload) || isUndefined(payload);
}

export default isNullLike;
