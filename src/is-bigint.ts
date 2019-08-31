"use strict";

/**
 * Determine whether the payload is `bigint` or not.
 * 
 * @param payload An object to be determined
 */
export function isBigInt(payload: unknown): payload is bigint {

    return typeof payload === "bigint";
}

export default isBigInt;
