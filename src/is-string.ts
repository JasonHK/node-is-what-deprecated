"use strict";

/**
 * Determine whether the payload is `string` or not.
 * 
 * @param payload An object to be determined
 */
export function isString(payload: unknown): payload is string {

    return typeof payload === "string";
}

export default isString;
