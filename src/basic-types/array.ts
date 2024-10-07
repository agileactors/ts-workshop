//Array

const fruits: string[] = ['Apple', 'Orange', 'Banana'];

//Arrays can also be declared using the Array generic type. This is a generic type that is built into TypeScript.

const fruits2: Array<string> = ['Apple', 'Orange', 'Banana']; //same as above

//Watch out for this common mistake:
const fruits3 = []; //this is of type any[]!
const fruits4: string[] = []; //now this is type safe
