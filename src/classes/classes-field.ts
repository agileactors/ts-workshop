/*
    In Ts a constructor is a special function that exists inside a class, that is called only once when the object is created

    We can omit the value declaration and the value assignment in the constructor
*/

// Ιn classes if we omit the value indentifier it is considered to be public
class Entity {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}
// the Entity and EntityWithOnlyConstructor are equal
class EntityWithOnlyConstructor {
  constructor(public color: string) {}
}
