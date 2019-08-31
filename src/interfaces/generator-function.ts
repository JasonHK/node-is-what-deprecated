"use strict";

export type GeneratorFunction<T = any> = (...args: any[]) => IterableIterator<T>;
