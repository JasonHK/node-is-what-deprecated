"use strict";

import { isArray } from "./is-array";

/**
 * Determine whether the payload is `Array` and also not empty.
 * 
 * @param payload An object to be determined
 */
export function isFullArray<T extends any[] = any[]>(payload: unknown): payload is T {

    return isArray<T>(payload) && (payload.length > 0);
}

export default isFullArray;
