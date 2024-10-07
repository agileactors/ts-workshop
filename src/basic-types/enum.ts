//Enum

enum Option1 {
  A = '1',
  B = '2',
}

enum Option2 {
  C = '3',
}

//merge doesn't get the actual literal values!
type Option = Option1 | Option2;

//Type '"1"' is not assignable to type 'Option'...
// const option: Option = '1';

//this works!
const option: Option = Option1.A;

// When using enums don't use them without assigning values to each key otherwise you'll get a numeric enum by default which is very cryptic

//Advantages:
// - Avoid typo mistakes when using strings (imagine an object with a 'color' key and 'red' for its CSSMathValue. What if we type 'Red' instead of 'red')
// - Improved readability
// - Organising constants into a data structure

//Disadvantages:
// - JS transpiled overhead
// - Literal merge as shown is not possible
// - Need imports to use them in other files

//Literal

type OptionLiteral1 = '1' | '2';

type OptionLiteral2 = '3';

//merge
type OptionsLiteral = OptionLiteral1 | OptionLiteral2;

//works out of the box
const optionLiteral: OptionsLiteral = '1';

//Advantages
// - No JS transpiled overhead
// - Literal merge is possible
// - No imports needed
// - Are very composable by nature and can be used to create complex types

//Disadvantages
// - Not as readable as enums
// - Hard to integrate when using complex infra
// - May need casting as literals are more explicit than the plain string type

//Verdict:
// Biggest Reason to go with Enum 👍
// Because Literal types are very explicit this would mean that we would have to re-write everything under the Literal way paradigm if much infra is coupled to our code.

// Enums are basically strings but Literal types are not!
