"use strict";

/**
 * Constructor type means this is a constructor function.
 */
export type ConstructorType<I = any> = new (...args: any) => I;
