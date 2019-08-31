"use strict";

import { TypedArray } from "./interfaces/typed-array";

import { isFloat32Array } from "./is-float32-array";
import { isFloat64Array } from "./is-float64-array";
import { isInt8Array } from "./is-int8-array";
import { isInt16Array } from "./is-int16-array";
import { isInt32Array } from "./is-int32-array";
import { isUint8Array } from "./is-uint8-array";
import { isUint8ClampedArray } from "./is-uint8-clamped-array";
import { isUint16Array } from "./is-uint16-array";
import { isUint32Array } from "./is-uint32-array";

/**
 * Determine whether the payload is typed array or not. Typed array is 
 * array-like `object` and provide a mechanism for accessing raw binary data.
 * 
 * The currently supported typed arrays are `Int8Array`, `Uint8Array`, 
 * `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, 
 * `Uint32Array`, `Float32Array`, and `Float64Array`.
 * 
 * @param payload An object to be determined
 */
export function isTypedArray(payload: unknown): payload is TypedArray {

    return isInt8Array(payload) || isUint8Array(payload) || isUint8ClampedArray(payload) || isInt16Array(payload) || isUint16Array(payload) || isInt32Array(payload) || isUint32Array(payload) || isFloat32Array(payload) || isFloat64Array(payload);
}

export default isTypedArray;
