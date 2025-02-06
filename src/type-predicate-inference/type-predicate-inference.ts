// Type Predicate Inference

// Type Predicate Inference allows TypeScript to determine a more specific type
// inside a conditional block using custom type guard functions.

type User = { id: number; name: string };
type Guest = { isGuest: true };

// Due to the type predicate `person is User`,
// if this function returns `true`, it means that `person` is a `User`.
const isUser = (person: User | Guest): person is User => {
  return 'id' in person;
};

const person: User | Guest = { id: 1, name: 'John' };

if (isUser(person)) {
  console.log(person.name); // TypeScript treats `person` as a `User` inside this block
}
