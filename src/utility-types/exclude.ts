// Exclude

// The 'Exclude' utility type in TypeScript is used to create a type
// by excluding specific types from a union type.
// Useful when we want to filter out certain types from a broader set of types.

//the difference from Omit is that its used in unions instead of object types

// Syntax: Exclude<Type, ExcludedUnion>

type Animal = 'Dog' | 'Cat' | 'Bird' | 'Fish';
type DomesticAnimal = Exclude<Animal, 'Bird' | 'Fish'>;

const myPet: DomesticAnimal = 'Dog';
// In this example, the 'Bird' and 'Fish' types are excluded from the 'DomesticAnimal' type.
