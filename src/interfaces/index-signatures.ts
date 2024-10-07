// Index Signatures in TypeScript Interfaces

// Index signatures are useful when you have objects with dynamic property names,
// but you know the type of values these properties will hold.

interface IBooleanProperties {
  [key: string]: boolean;
}

// Using the 'IBooleanProperties' interface
// Creating an object to represent user permissions where any property name has a boolean value.

const userPermissions: IBooleanProperties = {
  canEdit: true,
  canDelete: false,
  canView: true
};