// Extract

// The 'Extract' utility type in TypeScript is used to create a type
// by selecting only the types that are present in both the original type and a specified union type.
// It's useful for scenarios where you want to extract common types from a union.

// Syntax: Extract<Type, Union>

type Animal = 'Dog' | 'Cat' | 'Bird' | 'Fish';
type CommonPets = Extract<Animal, 'Dog' | 'Cat'>;

const myPet: CommonPets = 'Dog';
// In this example, only the 'Dog' and 'Cat' types are included in the 'CommonPets' type.
