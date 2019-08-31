"use strict";

/**
 * Determine whether the payload is `boolean` or not.
 * 
 * @param payload An object to be determined
 */
export function isBoolean(payload: unknown): payload is boolean {

    return typeof payload === "boolean";
}

export default isBoolean;
