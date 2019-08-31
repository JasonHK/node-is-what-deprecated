"use strict";

import { isStringLike } from "./is-string-like";

/**
 * Determine whether the payload is `string` and also not empty. String-like 
 * means the payload is either `string` or object wrapped `string` primitive.
 * 
 * @param payload An object to be determined
 */
export function isFullStringLike(payload: unknown): payload is string | String {

    return isStringLike(payload) && (payload.length > 0);
}

export default isFullStringLike;
