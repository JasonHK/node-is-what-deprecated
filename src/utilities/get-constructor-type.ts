"use strict";

import { ConstructorType } from "../interfaces/constructor-type";

import { isPrimitive } from "../is-primitive";

export function getConstructorType<P, T extends ConstructorType<P>>(payload: P): T {

   if (isPrimitive(payload)) { throw new TypeError(); }
   return (payload as Object).constructor as T;
}

export default getConstructorType;
