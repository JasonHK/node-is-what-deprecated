"use strict";

/**
 * Primitive type means the payload is not an `object` and has no methods.
 * 
 * The seven primitive types JavaScript currently have are `string`, `number`, 
 * `bigint`, `boolean`, `null`, `undefined`, and `symbol`.
 */
export type PrimitiveType = bigint | boolean | null | number | string | symbol | undefined;

export default PrimitiveType;
