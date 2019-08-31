"use strict";

import { GeneratorFunction } from "./interfaces/generator-function";

import { getConstructorType } from "./utilities/get-constructor-type";

import { isFunction } from "./is-function";

/**
 * Determine whether the payload is `function*` generator function or not.
 * 
 * @param payload An object to be determined
 */
export function isGeneratorFunction<T extends GeneratorFunction = GeneratorFunction>(payload: unknown): payload is T {

    return isFunction(payload) && (getConstructorType(payload).name === "GeneratorFunction");
}

export default isGeneratorFunction;
