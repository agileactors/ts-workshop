Exercise 1

Given the following 'Product' type:

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

- Create a type alias for the 'price' property.
- Create a union type for 'id' and 'inStock' properties.
- Write a function that accepts a parameter of the union type and logs its value.

Exercise 2

Write a generic function 'extractValue' to retrieve a property value from an object using its key.
Ensure type safety and test with a 'Product' object for valid and invalid keys.