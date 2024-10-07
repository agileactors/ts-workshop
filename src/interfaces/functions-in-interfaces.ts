// Functions in Interfaces

// Interfaces in TypeScript can define function signatures for clarity and consistency.

interface IAddition {
  // Function signature for addition
  add(a: number, b: number): number;
}

// Implementing the 'IAddition' interface
const additionFunction: IAddition = {
  add(a, b) {
    return a + b;
  },
};

const result = additionFunction.add(5, 3); // Output: 8