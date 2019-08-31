"use strict";

/**
 * Determine whether the payload is `null` or not.
 * 
 * @param payload An object to be determined
 */
export function isNull(payload: unknown): payload is null {

    return payload === null;
}

export default isNull;
