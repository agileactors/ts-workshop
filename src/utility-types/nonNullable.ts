// NonNullable

// The 'NonNullable' utility type in TypeScript is used to create a type
// by excluding null and undefined from a given type.
// It's useful for scenarios where you want to ensure that a value is not null or undefined.

// Syntax: NonNullable<Type>

type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;

const myString: DefinitelyString = 'Hello, TypeScript!';
// In this example, the 'MaybeString' type includes string, null, and undefined,
// but 'DefinitelyString' type excludes null and undefined, so it ensures a non-null and non-undefined string.
