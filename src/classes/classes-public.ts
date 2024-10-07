//public classes

/*
In object-oriented programming (OOP), classes serve as blueprints for creating objects. A class declaration is made using the 'class' keyword, and instances are created using the 'new' keyword followed by the class name.

In TypeScript classes have visibility modifiers:

public (accessible outside the class)
protected (accessible by instances and subclasses)
private (inaccessible outside the class).
*/
class Person {
  constructor(public name: string, public age: number) {}

  public getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}
const jon = new Person('John', 35);

//class methods
export class AnimalClass {
  constructor(public animalType: string, public color: string) {}

  doAction(): void {
    console.log(`The ${this.animalType} is walking...`);
  }
}

const catAnimal = new AnimalClass('cat', 'Black');
catAnimal.doAction();

//class inheritance

/*
Inheritance allows you to reuse the functionality of an existing class without rewriting it.
The class which inherits properties and methods is called the child class And the class whose properties and methods are inherited is known as the parent class.
*/

//using super we can pass values to the parent class constructor
class Mammal extends AnimalClass {
  numberOfLegs: number;

  constructor(animalType: string, color: string, numberOfLegs: number) {
    super(animalType, color);
    this.numberOfLegs = numberOfLegs;
  }

  doAction(): void {
    console.log(`The ${this.animalType} is swimming...`);
  }

  giveBirth(): void {
    console.log(`The ${this.animalType} is giving birth...`);
  }
}

const dolphin = new Mammal('dolphin', 'grey', 0);

dolphin.giveBirth();

//here doAction from Mammal class overwrites the doAction method from the parent class Animal
//this is an example of method overriding. This is useful when a sub class wants to modify the behavior of super class for certain tasks.
dolphin.doAction();
