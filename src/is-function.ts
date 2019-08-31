"use strict";

/**
 * Determine whether the payload is `function` or not.
 * 
 * @param payload An object to be determined
 */
export function isFunction<T extends Function = Function>(payload: unknown): payload is T {

    return typeof payload === "function";
}

export default isFunction;
