"use strict";

//==============================================================================
// Import
//==============================================================================

import { default as utilities } from "./utilities";

//------------------------------------------------------------------------------
// Primitive Types
//------------------------------------------------------------------------------

import { isPrimitive } from "./is-primitive";

// String
import { isString } from "./is-string";
import { isStringLike } from "./is-string-like";
import { isEmptyString } from "./is-empty-string";
import { isEmptyStringLike } from "./is-empty-string-like";
import { isFullString } from "./is-full-string";
import { isFullStringLike } from "./is-full-string-like";

// Number
import { isNumber } from "./is-number";
import { isNumberLike } from "./is-number-like";
import { isAnyNumber } from "./is-any-number";
import { isAnyNumberLike } from "./is-any-number-like";

// BigInt
import { isBigInt } from "./is-bigint";
import { isBigIntLike } from "./is-bigint-like";

// Boolean
import { isBoolean } from "./is-boolean";
import { isBooleanLike } from "./is-boolean-like";

// Symbol
import { isSymbol } from "./is-symbol";
import { isSymbolLike } from "./is-symbol-like";

// Null & Undefined
import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";
import { isNullLike } from "./is-null-like";

//------------------------------------------------------------------------------
// Object Types
//------------------------------------------------------------------------------

import { isObject } from "./is-object";
import { isAnyObject } from "./is-any-object";
import { isInstanceType } from "./is-instance-type";

// Object
import { isPlainObject } from "./is-plain-object";
import { isObjectInstance } from "./is-object-instance";

// Function & Class
import { isFunction } from "./is-function";
import { isClass } from "./is-class";
import { isGeneratorFunction } from "./is-generator-function";

// Array
import { isArray } from "./is-array";
import { isEmptyArray } from "./is-empty-array";
import { isFullArray } from "./is-full-array";

// Date
import { isDate } from "./is-date";
import { isAnyDate } from "./is-any-date";

// Error
import { isError } from "./is-error";

// Map & Set
import { isMap } from "./is-map";
import { isSet } from "./is-set";
import { isWeakMap } from "./is-weak-map";
import { isWeakSet } from "./is-weak-set";

// Promise
import { isPromise } from "./is-promise";

// RegExp
import { isRegExp } from "./is-regexp";

// TypedArray
import { isTypedArray } from "./is-typed-array";
import { isInt8Array } from "./is-int8-array";
import { isUint8Array } from "./is-uint8-array";
import { isUint8ClampedArray } from "./is-uint8-clamped-array";
import { isInt16Array } from "./is-int16-array";
import { isUint16Array } from "./is-uint16-array";
import { isInt32Array } from "./is-int32-array";
import { isUint32Array } from "./is-uint32-array";
import { isFloat32Array } from "./is-float32-array";
import { isFloat64Array } from "./is-float64-array";

//==============================================================================
// Export
//==============================================================================

export { default as utilities } from "./utilities";

//------------------------------------------------------------------------------
// Primitive Types
//------------------------------------------------------------------------------

export { isPrimitive } from "./is-primitive";

// String
export { isString } from "./is-string";
export { isStringLike } from "./is-string-like";
export { isEmptyString } from "./is-empty-string";
export { isEmptyStringLike } from "./is-empty-string-like";
export { isFullString } from "./is-full-string";
export { isFullStringLike } from "./is-full-string-like";

// Number
export { isNumber } from "./is-number";
export { isNumberLike } from "./is-number-like";
export { isAnyNumber } from "./is-any-number";
export { isAnyNumberLike } from "./is-any-number-like";

// BigInt
export { isBigInt } from "./is-bigint";
export { isBigIntLike } from "./is-bigint-like";

// Boolean
export { isBoolean } from "./is-boolean";
export { isBooleanLike } from "./is-boolean-like";

// Symbol
export { isSymbol } from "./is-symbol";
export { isSymbolLike } from "./is-symbol-like";

// Null & Undefined
export { isNull } from "./is-null";
export { isUndefined } from "./is-undefined";
export { isNullLike } from "./is-null-like";

//------------------------------------------------------------------------------
// Object Types
//------------------------------------------------------------------------------

export { isObject } from "./is-object";
export { isAnyObject } from "./is-any-object";
export { isInstanceType } from "./is-instance-type";

// Object
export { isPlainObject } from "./is-plain-object";
export { isObjectInstance } from "./is-object-instance";

// Function & Class
export { isFunction } from "./is-function";
export { isClass } from "./is-class";
export { isGeneratorFunction } from "./is-generator-function";

// Array
export { isArray } from "./is-array";
export { isEmptyArray } from "./is-empty-array";
export { isFullArray } from "./is-full-array";

// Date
export { isDate } from "./is-date";
export { isAnyDate } from "./is-any-date";

// Error
export { isError } from "./is-error";

// Map & Set
export { isMap } from "./is-map";
export { isSet } from "./is-set";
export { isWeakMap } from "./is-weak-map";
export { isWeakSet } from "./is-weak-set";

// Promise
export { isPromise } from "./is-promise";

// RegExp
export { isRegExp } from "./is-regexp";

// TypedArray
export { isTypedArray } from "./is-typed-array";
export { isInt8Array } from "./is-int8-array";
export { isUint8Array } from "./is-uint8-array";
export { isUint8ClampedArray } from "./is-uint8-clamped-array";
export { isInt16Array } from "./is-int16-array";
export { isUint16Array } from "./is-uint16-array";
export { isInt32Array } from "./is-int32-array";
export { isUint32Array } from "./is-uint32-array";
export { isFloat32Array } from "./is-float32-array";
export { isFloat64Array } from "./is-float64-array";

//==============================================================================
// Export Default
//==============================================================================

/**
 * A set of functions for type assertion.
 */
export default {
    utilities,

    //--------------------------------------------------------------------------
    // Primitive Types
    //--------------------------------------------------------------------------

    isPrimitive,

    // String
    isString,
    isStringLike,
    isEmptyString,
    isEmptyStringLike,
    isFullString,
    isFullStringLike,

    // Number
    isNumber,
    isNumberLike,
    isAnyNumber,
    isAnyNumberLike,

    // BigInt
    isBigInt,
    isBigIntLike,

    // Boolean
    isBoolean,
    isBooleanLike,

    // Symbol
    isSymbol,
    isSymbolLike,

    // Null & Undefined
    isNull,
    isUndefined,
    isNullLike,

    //--------------------------------------------------------------------------
    // Object Types
    //--------------------------------------------------------------------------

    isObject,
    isAnyObject,
    isInstanceType,

    // Object
    isPlainObject,
    isObjectInstance,

    // Function & Class
    isFunction,
    isClass,
    isGeneratorFunction,

    // Array
    isArray,
    isEmptyArray,
    isFullArray,

    // Date
    isDate,
    isAnyDate,

    // Error
    isError,

    // Map & Set
    isMap,
    isSet,
    isWeakMap,
    isWeakSet,

    // Promise
    isPromise,

    // RegExp
    isRegExp,

    // TypedArray
    isTypedArray,
    isInt8Array,
    isUint8Array,
    isUint8ClampedArray,
    isInt16Array,
    isUint16Array,
    isInt32Array,
    isUint32Array,
    isFloat32Array,
    isFloat64Array,
};
