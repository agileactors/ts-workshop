// // Solution to Exercise 1
// type UrlParams = {
//   id: string;
//   name: string;
// };

// const params = new URLSearchParams({
//   id: '123',
//   name: 'John',
// } satisfies UrlParams);

// //Note: the very same thing applies with POST request using fetch API

// // Solution to Exercise 2

// type AtLeastOneNumber = [number, ...number[]];

// const array = [1, 2, 3];

// //without satisfies it will not give an error
// const maybeExists = array[3];

// const tupple = [1, 2, 3] satisfies AtLeastOneNumber;
