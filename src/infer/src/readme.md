Exercise 1

In this exercise, you will use the `infer` keyword to extract types dynamically from string templates.

- Create a type `MovieInfo<T>` that extracts the genre from strings like:
  `'Movie: Inception (Genre: Sci-Fi)'` and `'Movie: Titanic (Genre: Romance)'`.
  Use `MovieInfo` to infer the genre for these two examples.

Exercise 2

Given the `movieRoutes` object, use `infer` to extract:
- The list of movie categories (like `watched`, `favorites`, or `wishlist`) into a type called `MovieCategories`.
- The list of actions for `watched` routes (like `get` or `rate`) into a type called `WatchedActions`.
- The list of actions for `wishlist` routes (like `add`) into a type called `WishlistActions`.
