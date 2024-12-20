// Exercise 1

// Given the following 'Product' type:
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// Create a type alias for the 'price' property.
type ProductPrice = Product['price'];

// Create a union type for 'id' and 'inStock' properties.
type ProductIdOrInStock = Product['id' | 'inStock'];

// Write a function that accepts a parameter of the union type and logs its value.
const logProductInfo = (value: ProductIdOrInStock): void => {
  console.log('Product Info:', value);
};

// Exercise 2

// Write a generic function 'extractValue' to retrieve a property value from an object using its key.
const extractValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Ensure type safety and test with a 'Product' object for valid and invalid keys.
const product: Product = {
  id: 10,
  name: 'Wireless Mouse',
  price: 29.99,
  inStock: true,
};

// Valid key:
const productPrice = extractValue(product, 'price'); // TypeScript infers: number
console.log('Product Price:', `${productPrice}€`); // Logs: "Product Price: 29.99€"

// Invalid key:
// const invalidKey = extractValue(product, 'nonExistentKey'); -> Error: Argument of type '"nonExistentKey"' is not assignable to parameter of type '"id" | "name" | "price" | "inStock"'.
