// Interfaces and improving code readability

// Long type annotation is shown as inline declaration of type

const customerData: {
  id: number;
  username: string;
  email: string;
} = {
  id: 1,
  username: 'customer123',
  email: 'customer@example.com',
};

// Reusable interface which improves code readability (preferred way)

interface ICustomer {
  id: number;
  username: string;
  email: string;
}

const customerDataWithInterface: ICustomer = {
  id: 1,
  username: 'customer123',
  email: 'customer@example.com',
};
