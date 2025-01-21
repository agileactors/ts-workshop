// Solution Exercise 1

// Strictly typing an array of difficulty levels
const difficultyLevels = ['easy', 'medium', 'hard'] as const;
// TypeScript infers: readonly ["easy", "medium", "hard"]

// Selecting one of the difficulty levels
let selectedDifficulty: (typeof difficultyLevels)[number];
selectedDifficulty = 'easy'; // Valid
// selectedDifficulty = 'impossible'; -> Error: Type '"impossible"' is not assignable to type '"easy" | "medium" | "hard"'.

// Making an immutable book object
const book = {
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K. Rowling',
  publishedYear: 1998,
} as const;
// TypeScript infers: { readonly title: "Harry Potter and the Chamber of Secrets"; readonly author: "J.K. Rowling"; readonly publishedYear: 1998 }

// Attempting to modify the book object will result in an error
// book.title = 'Harry Potter and the Goblet of Fire'; -> Error: Cannot assign to 'title' because it is a read-only property

// Solution Exercise 2

// Creating a strictly typed list of transport modes
const transportModes = ['car', 'bike', 'train', 'plane'] as const;
// TypeScript infers: readonly ["car", "bike", "train", "plane"]

// Function accepting only valid transport modes
const selectTransportMode = (mode: (typeof transportModes)[number]) => {
  console.log(`You selected: ${mode}`);
};

selectTransportMode('car'); // Logs: "You selected: car"

// selectTransportMode('ship'); -> Error: Type '"ship"' is not assignable to type '"
