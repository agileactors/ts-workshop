Task 1: Partial
Create an interface named 'IBankAccount' with 'id' (string), 'fullName' (string), 'balance' (number), and 'isActive' (boolean) properties.

Add an optional property named 'creationDate' of type 'Date'.

Use the 'Partial' utility type to make a new type 'PartialBankAccount'.

Create an object named 'bankAccount' using the 'PartialBankAccount' type and assign a selection of properties to it.

Task 2: Pick

Using the 'IBankAccount' interface, create a new type 'CustomerId' that picks only the 'id' and 'fullName' properties.

Create an object named 'customer' using the 'CustomerId' type with 'id' and 'fullName' properties.

Task 3: Readonly

Make the 'IBankAccount' properties immutable using 'Readonly' to create a new type 'ReadonlyBankAccount'.

Create an object named 'readonlyBankAccount' using the 'ReadonlyBankAccount' type.

Attempt to modify one of its properties to see the error and then comment it out.

Task 4: Record

Create a 'Record' type 'BankAccountRecord' that maps string keys to 'IBankAccount' objects.

Create an object named 'bankAccountsList' using the 'BankAccountRecord' type, including at least two bank accounts.

Task 5: Required

Make the optional properties of 'IBankAccount' required using 'Required' to create a new type 'FullBankAccountProfile'.

Create an object named 'completeBankAccount' using the 'FullBankAccountProfile' type, ensuring all properties are included.

Task 6: Exclude

Create a union type 'PaymentMethod' that includes 'CreditCard', 'PayPal', 'BankTransfer', and 'Bitcoin'.

Create a type 'NonDigitalMethods' that excludes 'PayPal' and 'Bitcoin'.

Create a variable named 'nonDigitalPayment' using the 'NonDigitalMethods' type.

Task 7: Extract

Create a union type 'Transportation' that includes 'Car', 'Bus', 'Bicycle', and 'Boat'.

Create a type 'LandTransport' that extracts 'Car' and 'Bicycle'.

Create a variable named 'landVehicle' using the 'LandTransport' type.

Task 8: NonNullable

Create a type 'MaybeNumber' that includes 'number', 'null', and 'undefined'.

Create a type 'DefinitelyNumber' that is not 'null' or 'undefined'.

Create a variable named 'definitelyNumber' using the 'DefinitelyNumber' type.

Task 9: Omit

Create an objectType named 'Product' with 'name' (string), 'price' (number), 'quantity' (number), and 'category' (string) properties.

Make a new type 'ReducedProduct' that wont have the 'quantity' property.

Create an object named 'reducedProduct' using the 'ReducedProduct' type and assign values to its properties.

Task 10: ReturnType

Create a function type 'GreetingsFunction' that takes a 'name' (string) parameter and returns a greeting (string).

Create a type 'GreetingType' that represents the return type of 'GreetingsFunction'.

Create a variable named 'greeting' using the 'GreetingType' type.
