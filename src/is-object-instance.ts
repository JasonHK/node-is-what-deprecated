"use strict";

import { PlainObject } from "./interfaces/plain-object";

import { getObjectType } from "./utilities/get-object-type";

import { isObject } from "./is-object";

/**
 * Determine whether the payload is plain object, or `object` constructed by a 
 * constructor.
 * 
 * Plain object means the payload is either created by the `{}` object literal 
 * notation, or constructed with `new Object()`.
 * 
 * @param payload An object to be determined
 */
export function isObjectInstance<T extends Object = PlainObject>(payload: unknown): payload is T {

    return isObject(payload) && (getObjectType(payload) === "Object");
}

export default isObjectInstance;
