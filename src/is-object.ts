"use strict";

import { PlainObject } from "./interfaces/plain-object";

import { isNull } from "./is-null";

/**
 * Determine whether the payload is any `object` except for `null` or 
 * `function`.
 * 
 * @param payload An object to be determined
 */
export function isObject<T extends object = PlainObject>(payload: unknown): payload is T {

    return (typeof payload === "object") && !isNull(payload);
}

export default isObject;
