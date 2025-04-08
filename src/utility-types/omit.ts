// Omit

// The 'Omit' utility type in TypeScript is used to create a type
// by excluding specified properties from a given type.
// It's useful for scenarios where you want to create a type similar to another type but without certain properties.

//the difference from Exclude is that its used in object types instead of unions

// Syntax: Omit<Type, Keys>

type Person = {
  name: string;
  age: number;
  address: string;
  email: string;
};

type PersonWithoutAddress = Omit<Person, 'address'>;

const myFriend: PersonWithoutAddress = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  // Note: 'address' property is excluded in PersonWithoutAddress type
};

// In this example, the 'address' property is excluded from the 'PersonWithoutAddress' type.
