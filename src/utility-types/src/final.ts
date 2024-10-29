// TypeScript utility types exercise solution.

// Task 1: Partial
interface IBankAccount {
  id: string;
  fullName: string;
  balance: number;
  isActive: boolean;
  creationDate?: Date;
}

type PartialBankAccount = Partial<IBankAccount>;

const bankAccount: PartialBankAccount = {
  id: 'acc123',
  fullName: 'John Doe',
  balance: 5000,
};

// Task 2: Pick
type CustomerId = Pick<IBankAccount, 'id' | 'fullName'>;

const customer: CustomerId = {
  id: 'acc234',
  fullName: 'Alice Smith',
};

// Task 3: Readonly
type ReadonlyBankAccount = Readonly<IBankAccount>;

const readonlyBankAccount: ReadonlyBankAccount = {
  id: 'acc345',
  fullName: 'Bob Williams',
  balance: 7500,
  isActive: true,
  creationDate: new Date('2021-10-10'),
};

// readonlyBankAccount.balance = 8000; // Error: Cannot assign to 'balance' because it is a read-only property

// Task 4: Record
type BankAccountRecord = Record<string, IBankAccount>;

const bankAccountsList: BankAccountRecord = {
  account1: {
    id: 'acc1',
    fullName: 'Robert Green',
    balance: 3000,
    isActive: true,
    creationDate: new Date('2023-01-09'),
  },
  account2: {
    id: 'acc102',
    fullName: 'Samuel Adams',
    balance: 4500,
    isActive: false,
    creationDate: new Date('2018-08-27'),
  },
};

// Task 5: Required
type FullBankAccountProfile = Required<IBankAccount>;

const completeBankAccount: FullBankAccountProfile = {
  id: 'acc789',
  fullName: 'Jake Anderson',
  balance: 10000,
  isActive: true,
  creationDate: new Date('2020-06-15'),
};

// Task 6: Exclude
type PaymentMethod = 'CreditCard' | 'PayPal' | 'BankTransfer' | 'Bitcoin';
type NonDigitalMethods = Exclude<PaymentMethod, 'PayPal' | 'Bitcoin'>;

const nonDigitalPayment: NonDigitalMethods = 'CreditCard';

// Task 7: Extract
type Transportation = 'Car' | 'Bus' | 'Bicycle' | 'Boat';
type LandTransport = Extract<Transportation, 'Car' | 'Bicycle'>;

const landVehicle: LandTransport = 'Car';

// Task 8: NonNullable
type MaybeNumber = number | null | undefined;
type DefinitelyNumber = NonNullable<MaybeNumber>;

const definitelyNumber: DefinitelyNumber = 42;

// Task 9: Omit
type Product = {
  name: string;
  price: number;
  quantity: number;
  category: string;
};

type ReducedProduct = Omit<Product, 'quantity'>;

const reducedProduct: ReducedProduct = {
  name: 'Widget',
  price: 19.99,
  category: 'Electronics',
};

// Task 10: ReturnType
type GreetingsFunction = (name: string) => string;
type GreetingType = ReturnType<GreetingsFunction>;

const greeting: GreetingType = 'Hello, TypeScript!';
