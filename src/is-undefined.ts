"use strict";

/**
 * Determine whether the payload is `undefined` or not.
 * 
 * @param payload An object to be determined
 */
export function isUndefined(payload: unknown): payload is undefined {

    return typeof payload === "undefined";
}

export default isUndefined;
