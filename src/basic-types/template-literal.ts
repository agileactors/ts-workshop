// Template Litera Type

// Template literal types build on string literal types, and have the ability to expand into many strings via unions.

// They have the same syntax as template literal strings in JavaScript, but are used in type positions. When used with concrete literal types, a template literal produces a new string literal type by concatenating the contents.

// Let’s look at this chess board example:

type ChessLetter = 'A' | 'B' | 'C';

type ChessNumber = 1 | 2 | 3;

type Board = `${ChessLetter}${ChessNumber}`;

//doesn't work!
// const move: Board = '1';
//doesn't work!
// const move: Board = '1A';
//only this works!
const move: Board = 'A1';
