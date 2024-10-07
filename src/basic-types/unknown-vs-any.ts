//Any

// Least restrictive type in TypeScript.

// -Variables of type any can hold values of any type, and TypeScript essentially turns off type checking for those variables.

// -You can call any method or access any property on a variable of type any without compilation errors.

// -any is often used when you don't know or care about the specific type of a value, or when you're gradually migrating untyped JavaScript code to TypeScript.

//Unknown

// -A more restrictive type introduced in TypeScript 3.0 to provide better type safety for dynamic values.

// -Variables of type unknown can hold values of any type, similar to any, but you cannot perform operations on them without first narrowing their type.

// -To use the value within an unknown variable, you must explicitly assert or narrow its type using type assertions, type guards, or control flow analysis.

const parseObject = (value: any) => {
  //very error prone..
  if (value) {
    return value.data.id;
  }

  throw new Error('Invalid object parsing!');
};

const parseObjectWithUnknown = (value: unknown) => {
  //the return value would not error out if we used any with less assertions..
  if (
    typeof value === 'object' &&
    value &&
    'data' in value &&
    typeof value.data === 'object' &&
    value.data &&
    'id' in value.data &&
    typeof value.data.id === 'string'
  ) {
    return value.data.id;
  }

  throw new Error('Invalid object parsing!');
};

// Unknown is preferred over any when you want to work with values of uncertain types in a type-safe manner. It encourages you to handle type checks explicitly and reduces the risk of runtime errors caused by type mismatches.
