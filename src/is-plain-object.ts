"use strict";

import { PlainObject } from "./interfaces/plain-object";

import { isObject } from "./is-object";

/**
 * Determine whether the payload is plain object or not.
 * 
 * Plain object means the payload is either created by the `{}` object literal 
 * notation, or constructed with `new Object()`.
 * 
 * @param payload An object to be determined
 */
export function isPlainObject<T extends PlainObject = PlainObject>(payload: unknown): payload is T {

    return isObject(payload) && (((payload as Object).constructor === Object) && (Reflect.getPrototypeOf(payload) === Object.prototype));
}

export default isPlainObject;
