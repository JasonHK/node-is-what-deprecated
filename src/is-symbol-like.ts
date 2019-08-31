"use strict";

import { isInstanceType } from "./is-instance-type";
import { isSymbol } from "./is-symbol";

/**
 * Determine whether the payload is symbol-like or not. Symbol-like means the 
 * payload is either `symbol` or object wrapped `symbol` primitive.
 * 
 * @param payload An object to be determined
 */
export function isSymbolLike(payload: unknown): payload is symbol | Symbol {

    return isSymbol(payload) || (isInstanceType(payload, Symbol) && isSymbol((payload as unknown as Symbol).valueOf()));
}

export default isSymbolLike;
