// `infer` keyword

// The `infer` keyword is used inside conditional types to extract and infer specific types
// from complex structures. It allows TypeScript to determine a type automatically.

// Why is it useful?

// 1. Extracting the return type of a function

// Without `infer`, we have to manually write the return type.
const func = (x: number): string => x.toString();
type ReturnTypeManual = string;

// With `infer`, TypeScript extracts the return type automatically.
// - `T extends (...args: any[]) => infer R` means:
// - If `T` is a function, infer (guess) its return type `R`, otherwise return `never`.
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type ReturnTypeOfFunc = GetReturnType<typeof func>; // TypeScript infers: string

// 2. Extracting the type inside a Promise

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Result = UnwrapPromise<Promise<number>>; // TypeScript infers: number

// 3. Extracting the element type from an array

type Flatten<T> = T extends Array<infer Item> ? Item : T;
type Str = Flatten<string[]>; // TypeScript infers: string
