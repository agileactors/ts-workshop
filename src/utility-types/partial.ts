// Partial

// The 'Partial' utility type in TypeScript makes all properties of a type optional.
// Useful for creating objects that may not include all properties of a given type.

// Syntax: Partial<Type>

type Book = {
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
  ISBN: string | number;
};

type PartialBook = Partial<Book>;

const bookWithPartialInfo: PartialBook = { title: 'Example book', author: 'John Doe', yearPublished: 2018 };
// In this example, only the title, author and yearPublished are provided, other properties are optional.