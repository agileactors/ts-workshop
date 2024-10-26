// // Solution to Exercise 1
// class Student {
//   constructor(private name: string, private rollNumber: number) {}

//   getName = () => this.name;
//   getRollNumber = () => this.rollNumber;
//   setName = (name: string) => (this.name = name);
//   setRollNumber = (rollNumber: number) => (this.rollNumber = rollNumber);
// }

// const student1 = new Student('John John', 15);
// const student2 = new Student('Edward Dodd', 10);

// console.log('Name:', student1.getName());
// console.log('Roll Number:', student1.getRollNumber());

// // Set a new roll number and print it
// student2.setRollNumber(5);

// console.log('New Roll Number:', student2.getRollNumber());

// // Solution to Exercise 2

// class Shape {
//   constructor(protected color: string) {}

//   draw() {
//     console.log(`Drawing a ${this.color} shape.`);
//   }
// }

// class Circle extends Shape {
//   constructor(protected color: string) {
//     super(color);
//   }

//   // Override the draw method for Circle
//   draw() {
//     console.log(`Drawing a ${this.color} circle.`);
//   }
// }

// const myCircle = new Circle('Red');

// // Call the draw method for Circle
// myCircle.draw(); // Output: Drawing a Red circle.
