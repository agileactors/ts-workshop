// Interfaces vs. Types

// TypeScript offers two primary constructs for shaping data: Interfaces and Types.
// Although they often lead to similar outcomes, they possess distinct features and advantages,
// making them suitable for different use cases.

// -> Advantages of using Interfaces

// 1. Declaration Merging:
// Interfaces support declaration merging, allowing the same interface to be declared multiple times.
// TypeScript merges these declarations into a single interface.

interface IAnimal {
  species: string;
}

interface IAnimal {
  breed: string;
}

// Merged Interface usage
const animal: IAnimal = {
  species: 'dog',
  breed: 'Labrador',
};

// On the other hand, types do not support declaration merging. Each type is unique and cannot be redeclared.

type Animal = {
  species: string;
};

// This will result in an error: "Duplicate identifier 'Animal'."
// type Animal = {
//   breed: string;
// };

// 2. Extensibility:
// Interfaces can be easily extended using the 'extends' keyword, facilitating the creation of
// complex, hierarchical data structures.

interface Insurance {
  policyNumber: string | number;
  coverageType: string;
}

interface Car extends Insurance {
  company: string;
  model: string;
  year: number;
}

// Extended Interface usage
const insuredCar: Car = {
  company: 'Toyota',
  model: 'Corolla',
  year: 2015,
  policyNumber: 'INS12345',
  coverageType: 'Comprehensive',
};

// 3. Classes in TypeScript can implement interfaces, which enforces that the class adheres to the structure
// defined by the interface. However, classes cannot implement a type alias directly.

interface IVehicle {
  drive(): void;
}

class Vehicle implements IVehicle {
  drive() {
    console.log('Driving a vehicle');
  }
}

// -> Advantages of using Types

// 1. Combining Types with Intersections:
// Unlike Interfaces, types cannot be extended in the same way. However, you can combine types using intersections.

type Measurements = {
  height: number;
  width: number;
};

// Intersection Type example using the '&' operator
type Suitcase = Measurements & { length: number };

// 2. Advanced Type Manipulations:
// Types are capable of expressing more complex scenarios through unions, intersections,
// mapped types, and conditional types.

// Union Type example using the '|' operator
type StringOrNumber = string | number;

// Mapped Type example
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };

// Conclusion:
// Use interfaces:
// - for defining object shapes, especially in an object-oriented programming context.
// - to take advantage of declaration merging.
// Use types:
// - when defining an alias for primitive types (string, boolean, number, bigint, symbol).
// - for advanced type manipulations like unions, intersections, tuples and working with
// diverse data types.
// While interfaces and types have distinct use cases,
// TypeScript's evolving features and community practices are increasingly favoring types for their advanced capabilities.
// However, choosing between interfaces and types should be guided by the specific requirements of the project and the functionality needed.
