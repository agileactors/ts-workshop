//tupple

// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array so we can use them to define a specific construct:

type RgbConfig = [number, number, number];

const rgb: RgbConfig = [255, 255, 255];

//naturally operations as those are applicable!
rgb[0] = 1;
rgb.push(1);

//Immutable way definition

// However there are some cases that we may not want that because we would like to be solid constructs.

type RgbConfig2 = readonly [number, number, number];

const rgb2: RgbConfig2 = [255, 255, 255];

//following operations not allowed anymore!
// rgb2[0] = 1;
// rgb2.push(1);
