// Interfaces

// Interfaces in TypeScript define the structure of objects
// by specifying their properties and methods, enhancing code readability and type safety.

interface IPerson {
  name: string;
  surname: string;
}

// We can then create a 'person' object that matches the 'IPerson' interface.

const person: IPerson = { name: 'John', surname: 'Doe' };
