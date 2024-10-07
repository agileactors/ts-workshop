// Generics

// Generics in TS allow you to create flexible and reusable components, functions, or classes that can work with different data types while maintaining type safety. They enable you to parameterize types, making your code more versatile and adaptable. Generics are particularly useful when you want to write functions or classes that work with various data structures without sacrificing type checking.

// Let's see an example while trying to type an API contract:

//this is an error prone type
type ApiResponse = {
  status: number;
  data: any;
};

type ApiResponseCustom<T> = {
  status: number;
  data: T;
};

//anything is applicable for data
const response1: ApiResponse = {
  status: 200,
  data: 'str',
};

//but with generics we're getting type safety!
type DataType = {
  id: number;
  name: string;
};

//Property 'name' is missing in type '{ id: number; }' but required in type 'DataType'.
// const response2: ApiResponseCustom<DataType> = {
//   status: 200,
//   data: {
//     id: '123',
//   },
// };

// This is very useful when you want to have flexible contracts but you want to retain type safety as well as some type structure integrity.
