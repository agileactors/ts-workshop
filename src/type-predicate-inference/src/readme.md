Exercise 1

In this exercise, you will learn to use TypeScript type guard functions to filter specific objects from a mixed array.

Given the following:

type Person = {
  id: string;
  name: string;
};

const onlyPersonArray = ['a', 'b', 'c', 1, { id: '1', name: 'Peter' }, null];

1. Write a type guard function called `isPerson`:
  - It should check whether a given value matches the `Person` type.
  - The function must return `true` if the value is a valid `Person` object.

2. Use this type guard function with the `filter()` method to extract only `Person` objects from the `onlyPersonArray`.

3. Log the filtered array to verify the output.

Hints:
  - A valid `Person` object must:
  - Be of type `object`.
  - Contain the properties `id` and `name`.
  - Have `id` and `name` as strings.
  - Use `typeof` and `in` operators to validate object properties.
  - Don’t forget to check for `null` values.