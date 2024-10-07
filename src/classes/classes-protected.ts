//protected classes

class Employee {
  constructor(protected identifier: string) {}
}

class FinanceEmployee extends Employee {
  getFinanceIdentifier() {
    return `fin-${this.identifier}`;
  }
}

//if we try to add the below code outside of the class or subclass we will get an error.

const financeEmployee = new FinanceEmployee('AB123');

// financeEmployee.identifier;
// this gives: Property identifier is protected and only accessible within class Employee and its subclasses.

//A protected value means that is accessed only within the class or child classes methods
class BeingProtected {
  constructor(protected type: string) {}
}

class Human extends BeingProtected {
  constructor(type: string, protected name: string) {
    super(type);
  }
  print(): void {
    console.log(this.type);
  }
}
const personObject1 = new Human('human', 'John');
personObject1.print();
