// ReturnType

// The 'ReturnType' utility type in TypeScript is used to extract the return type of a function type.
// It's useful for scenarios where you want to capture the type of the value returned by a function.

// Syntax: ReturnType<Type>

type MathOperation = (a: number, b: number) => number;
type ResultType = ReturnType<MathOperation>;

const add: MathOperation = (a, b) => a + b;
const result: ResultType = add(3, 7);
// In this example, 'ResultType' is the type of the value returned by the 'MathOperation' function type, which is 'number'.
