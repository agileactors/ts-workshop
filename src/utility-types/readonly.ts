// Readonly

// The 'Readonly' utility type in TypeScript makes all properties of a type immutable.
// It is used to ensure that once properties are set, they cannot be changed.

// Syntax: Readonly<Type>

type TransactionRecord = {
  transactionId: string;
  amount: number;
  date: Date;
};

type ImmutableTransaction = Readonly<TransactionRecord>;

const transaction: ImmutableTransaction = {
  transactionId: 'TR12345',
  amount: 250.0,
  date: new Date('2023-12-15'),
};
// In this example, the properties of the transaction cannot be changed after being set.

// transaction.amount = 200.00;
// Error: Cannot assign to 'amount' because it is a read-only property.
