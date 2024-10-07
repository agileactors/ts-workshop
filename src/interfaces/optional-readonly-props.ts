// Optional and readonly properties in interfaces

// Interfaces in TypeScript offer the flexibility of defining optional and readonly properties.

// Optional properties
// To define an optional property, we are using the '?' operator after the property name.

interface IPerson {
  name: string;
  surname: string;
  age?: number;
}

const person1: IPerson = { name: 'George', surname: 'Williams' }; // Correct, because 'age' is optional
const person2: IPerson = { name: 'Anna', surname: 'Jones', age: 30 };

// Readonly properties
// To define a readonly property, we introduce the 'readonly' modifier before the property name.

interface IProduct {
  name: string;
  price: number;
  readonly productId: number;
}

const product: IProduct = { name: 'book', price: 10, productId: 1000 };

// So, what distinguishes readonly properties? Let's explore this with the following example.

product.price = 15; // The price property of the product can be updated without issues.
// product.productId = 2000; // Error: Cannot assign to 'productId' because it is a read-only property.

// Conclusion: 'readonly' properties are immutable which means they enhance code safety by preventing unintended modifications.
