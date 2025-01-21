// Indexed Access Types

// Introduced in TypeScript 2.1, indexed access types allow you to extract the type of a specific property
// or set of properties from an object or array using the `T[K]` notation.

// Why is it useful?

// 1. Extracting a property's type
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type UserName = User['name']; // TypeScript infers: string

// 2. Extracting multiple properties as a union
type UserProperties = User['id' | 'isActive']; // TypeScript infers: number | boolean

// 3. Accessing array and tuple types
type Colors = ['red', 'green', 'blue'];

type RedColor = Colors[0]; // TypeScript infers: "red"
type AllColors = Colors[number]; // // Creates a union of all possible values in the colors array: "red" | "green" | "blue"

// 4. Dynamic property lookup with generics
// `getProperty` dynamically retrieves the value of a property from an object.
// It uses generics and indexed access types to ensure type safety.
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]; // T[K] gives the type of the value at the key `K` in the object `T`.
};

const user: User = { id: 1, name: 'Alice', isActive: true };

const userName = getProperty(user, 'name'); // TypeScript infers: string
const userId = getProperty(user, 'id'); // TypeScript infers: number
