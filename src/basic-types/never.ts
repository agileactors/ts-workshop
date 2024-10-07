//Never

// Never is a negation type that represents the type of values that never occur.

// Now let's do that in TS shall we ?

// const str: never = 'hello';

// const str: never = {};
// const str: never = false;

// What about functions x never ?

type Locations = 'Greece' | 'Italy' | 'Spain';

function getCountryLocation(country: Locations) {
  switch (country) {
    case 'Greece':
      return 'Europe';
    case 'Italy':
      return 'Europe';
    //doesn't cause error if we forget 'Spain' !
  }
}

// The problem here is that we're losing compile time safety! Impure function usage! Double red flags!

// type Locations = 'Greece' | 'Italy' | 'Spain';

// function getCountryLocation(country: Locations) {
//   switch (country) {
//     case 'Greece':
//       return 'Europe';
//     case 'Italy':
//       return 'Europe';
//     //error if we forget 'Spain' !
//     default:
//       const exhaustiveCheck: never = country;
//       throw new Error(`Unknown country ${exhaustiveCheck}`);
//   }
// }
