// Required

// The 'Required' utility type in TypeScript is used to create a type
// by amending all properties of a given type to be required.
// It's useful for scenarios where optional properties of a type need to be mandatory.

// Syntax: Required<Type>

type City = {
  name: string;
  country: string;
  population: number;
  hasMetro?: boolean;
};

type CompleteCityInfo = Required<City>;

const city: CompleteCityInfo = {
  name: 'Tokyo',
  country: 'Japan',
  population: 14000000,
  hasMetro: true,
};
// In this example, all properties, including the previously optional 'hasMetro', are required.
