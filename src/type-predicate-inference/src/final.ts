// Exercise 1

// Define a `Person` type.
type Person = {
  id: string;
  name: string;
};

// Define an array that contains a mix of values.
const onlyPersonArray = ['a', 'b', 'c', 1, { id: '1', name: 'Peter' }, null];

// Write a type guard function called `isPerson`:
// - It should check whether a given value matches the `Person` type.
// - The function must return `true` if the value is a valid `Person` object.

const isPerson = (item: unknown): item is Person => {
  return (
    typeof item === 'object' &&
    item !== null &&
    'id' in item &&
    'name' in item &&
    typeof (item as any).id === 'string' &&
    typeof (item as any).name === 'string'
  );
};

// Use this type guard function with the `filter()` method
// to extract only `Person` objects from the `onlyPersonArray`.
const onlyPersons = onlyPersonArray.filter(isPerson); //Person[]
