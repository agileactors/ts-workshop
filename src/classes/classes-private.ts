import { AnimalClass } from './classes-public';

//private classes
class Reptiles extends AnimalClass {
  constructor(animalType: string, color: string, private numberOfLegs: number) {
    super(animalType, color);
  }

  private doSlithering(): void {
    console.log(`The ${this.animalType} is slithering...`);
  }
  doAction(): void {
    this.doSlithering();
  }
}

const snake = new Reptiles('snake', 'grey', 0);

//private methods and values can be accessed only within the class.
//in order to access one we must use a method that have access

// snake.doSlithering(); Error: Property 'doSlithering' is private and only accessible within class 'Reptiles'
// but executing doAction will run the doSlithering() since it has access
snake.doAction();

//A private value means that is accessed only within the class and not by child classes or other
class BeingPrivate {
  constructor(private type: string) {}
}

class Human2 extends BeingPrivate {
  constructor(type: string, public name: string) {
    super(type);
  }
  print(): void {
    // this.type; error!
  }
}
const personObject2 = new Human2('human', 'John');
personObject2.print();
