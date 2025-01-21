// `as const` assertion

// Introduced in TypeScript 3.4, `as const`, infers the most specific literal type and makes objects / arrays immutable (read-only).

// Why is it useful?

// 1. Prevents type widening
const colors = ['red', 'green', 'blue'];
// TypeScript infers: string[] (modifiable)

const strictColors = ['red', 'green', 'blue'] as const;
// TypeScript infers: readonly ["red", "green", "blue"] (not modifiable)

let selectedColor: (typeof colors)[number];
selectedColor = 'red'; // Valid
// selectedColor = "white"; -> Error: Type '"white"' is not assignable to '"red" | "green" | "blue"'.

// Without `as const`, the array would be inferred as `string[]` (widened type), losing the exact values.

// 2. Enforces immutability
// `as const` makes objects or arrays read-only, preventing modifications.

const userRole = {
  role: 'admin',
  level: 1,
} as const;
// Inferred: { readonly role: "admin"; readonly level: 1 }

let role: typeof userRole.role;
// role = "user"; -> Error: Type '"user"' is not assignable to '"admin"'.

// 3. Enhances function constraints
// Ensures only allowed values can be passed to functions.

const selectFruit = (fruit: 'apple' | 'banana') => {
  console.log(`You selected: ${fruit}`);
};

const apple = 'apple';
selectFruit(apple); // Valid
// selectFruit("grape"); -> Error: Not assignable.
