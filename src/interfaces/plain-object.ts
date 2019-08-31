"use strict";

/**
 * Plain object means the payload is either created by the `{}` object literal 
 * notation, or constructed with `new Object()`.
 */
export type PlainObject = Record<string | number | symbol, any>;
