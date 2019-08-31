"use strict";

/**
 * Determine whether the payload is `symbol` or not.
 * 
 * @param payload An object to be determined
 */
export function isSymbol(payload: unknown): payload is symbol {

    return typeof payload === "symbol";
}

export default isSymbol;
