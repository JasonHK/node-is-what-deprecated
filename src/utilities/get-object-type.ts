"use strict";

export function getObjectType(payload: unknown): string {

    return (Object.prototype.toString.call(payload) as string).slice(8, -1);
}
