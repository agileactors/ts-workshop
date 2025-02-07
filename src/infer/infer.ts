// `infer` keyword

// The `infer` keyword is used inside conditional types to extract and infer specific types
// from complex structures. It allows TypeScript to determine a type automatically.

// Without `infer`, we have to manually write the return type.
const func = (x: number): string => x.toString();
type ReturnTypeManual = string;

// With `infer`, TypeScript extracts the return type automatically.
// - `T extends (...args: any[]) => infer R` means:
// - If `T` is a function, infer (guess) its return type `R`, otherwise return `never`.
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type ReturnTypeOfFunc = GetReturnType<typeof func>; // TypeScript infers: string

// TypeScript's `Awaited<T>` Utility Type

// - `T extends Promise<infer U>` extracts the resolved type of a single-level Promise.
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Result = UnwrapPromise<Promise<number>>; // TypeScript infers: number

// The utility type `Awaited<T>` was introduced in TypeScript 4.5 and recursively unwraps promises
// until it finds the final resolved type. 

type A = Awaited<Promise<string>>; // TypeScript infers: string
type B = Awaited<Promise<Promise<number>>>; // TypeScript infers: number
type C = Awaited<boolean | Promise<number>>; // TypeScript infers: number | boolean

// `Awaited<T>` removes all nested Promises, making it more powerful for deep async operations,
// whereas the `UnwrapPromise<T>` only extracts one layer of a `Promise<T>.