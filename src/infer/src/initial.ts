// Exercise 1

// Create a type `MovieInfo<T>` that extracts the genre from strings like:
// `'Movie: Inception (Genre: Sci-Fi)'` and `'Movie: Titanic (Genre: Romance)'`.

type MovieInfo<T> = T extends `Movie: ${string} (Genre: ${infer Genre})`
  ? Genre
  : never;

// Use `MovieInfo` to infer the genre for these two examples.

// Exercise 2

// Given the `movieRoutes` object, use `infer` to extract:

const movieRoutes = {
  'watched:get': '/watched/get',
  'watched:rate': '/watched/rate/:movieId',
  'favorites:get': '/favorites/get',
  'favorites:add': '/favorites/add/:movieId',
  'wishlist:get': '/wishlist/get',
  'wishlist:add': '/wishlist/add/:movieId',
} as const;

// The list of movie categories (like `watched`, `favorites`, or `wishlist`) into a type called `MovieCategories`.
// The list of actions for `watched` routes (like `get` or `rate`) into a type called `WatchedActions`.
// The list of actions for `wishlist` routes (like `add`) into a type called `WishlistActions`.