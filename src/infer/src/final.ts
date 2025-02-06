// Solution Exercise 1

// Create a type alias `ExtractResponse<T>` that extracts the return type of a function using `infer`.

type ExtractResponse<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : never;

// Define a function `fetchData` that returns a `Promise<{ data: string; success: boolean }>`
// and use `ExtractResponse` to infer its return type.

const fetchData = (): Promise<{ data: string; success: boolean }> => {
  return Promise.resolve({ data: 'Hello', success: true });
};

type ResponseType = ExtractResponse<typeof fetchData>;

// Create a type alias `ExtractArrayItem<T>` that extracts the element type from an array using `infer`.

type ExtractArrayItem<T> = T extends Array<infer U> ? U : never;

// Use `ExtractArrayItem` to extract the type of elements from a `movies` array.

const movies = ['Inception', 'Interstellar', 'Dune'];

type MovieType = ExtractArrayItem<typeof movies>;

// Log the inferred type of the first movie and the return type of `fetchData()`.
console.log(typeof movies[0]); // Expected output: "string"
console.log(typeof fetchData()); // Expected output: "object" (Promise)
