"use strict";

import { isInstanceType } from "./is-instance-type";
import { isBigInt } from "./is-bigint";

/**
 * Determine whether the payload is bigint-like or not. BigInt-like means the 
 * payload is either `bigint` or object wrapped `bigint` primitive.
 * 
 * @param payload An object to be determined
 */
export function isBigIntLike(payload: unknown): payload is bigint | BigInt {

    return isBigInt(payload) || (isInstanceType(payload, BigInt) && isBigInt((payload as unknown as BigInt).valueOf()));
}

export default isBigIntLike;
