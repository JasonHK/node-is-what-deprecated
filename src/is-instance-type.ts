"use strict";

import { ConstructorType } from "./interfaces/constructor-type";

import { isFunction } from "./is-function";
import { isPrimitive } from "./is-primitive";

/**
 * Determine whether the payload is constructed by the given `function` or its 
 * subclass.
 * 
 * @param payload An object to be determined
 * @param type A constructor function
 */
export function isInstanceType<T extends Function, I = T extends ConstructorType ? InstanceType<T> : T>(payload: unknown, type: T): payload is I {

    if (!isFunction(type)) { throw new TypeError(); }
    return !isPrimitive(payload) && (payload instanceof type);
}

export default isInstanceType;
