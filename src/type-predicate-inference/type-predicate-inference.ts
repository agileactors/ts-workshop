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

// TypeScript 5.5 introduced automatic type inference in certain scenarios,
// making it easier to write clean and intuitive type-safe code.

// Example 1: Inferring types with simple checks
function isString(value: unknown) {
  return typeof value === 'string';
}

const text: string | number = "test"
if (isString(text)) {
  console.log(text.toUpperCase()); // TypeScript infers `text` as a `string`
}

// Example 2: TypeScript can infer types correctly when using specific checks like `filter`

const array = ['a', 'b', 'c', null];

// TypeScript infers onlyTextArray as `string[]`
const onlyTextArray = array.filter(
  (item): item is string => typeof item === 'string',
);

// works as well
const onlyTextArray2 = array.filter((item) => {
  return item !== null;
}); // string[]

// doesn't work: using truthiness checks
const onlyTextArray3 = array.filter((item) => !!item); // (string | null)[]

// doesn't work: using the Boolean constructor
const onlyTextArray4 = array.filter(Boolean); // (string | null)[]