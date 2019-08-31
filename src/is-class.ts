"use strict";

import { ConstructorType } from "./interfaces/constructor-type";

import { isFunction } from "./is-function";

/**
 * Determine whether the payload is ECMAScript 2015 `class` or not.
 * 
 * Note that only classes created with the ECMAScript 2015 `class {}` syntactic 
 * sugar will be considered as a `class`.
 * 
 * @param payload An object to be determined
 */
export function isClass<T extends ConstructorType = ConstructorType>(payload: unknown): payload is T {

    if (!isFunction(payload)) { return false; }
    
    const keys: (string | number | symbol)[] = Reflect.ownKeys(payload);
    return keys.includes("prototype") && !(keys.includes("arguments") || keys.includes("caller"));
}

export default isClass;
