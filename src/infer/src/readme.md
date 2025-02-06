Exercise 1

In this exercise, you will use the `infer` keyword to extract and infer specific types dynamically.

- Create a type alias `ExtractResponse<T>` that extracts the return type of a function using `infer`.
- Define a function `fetchData` that returns a `Promise<{ data: string; success: boolean }>` and use `ExtractResponse` to infer its return type.
- Create a type alias `ExtractArrayItem<T>` that extracts the element type from an array using `infer`.
- Use `ExtractArrayItem` to extract the type of elements from a `movies` array.
- Log the inferred type of the first movie and the return type of `fetchData()`.