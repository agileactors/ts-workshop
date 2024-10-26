// // TypeScript Interface Exercise Solution

// // Task 1: Define a basic Interface
// interface IStudent {
//   studentId: number;
//   fullName: string;
// }

// // Task 2: Extend the Interface
// // Task 3: Function Type in Interface for Simple Calculation
// interface IUniStudent extends IStudent {
//   isEnrolled?: boolean;
//   readonly university: string;
//   getYearsStudied(enrollmentYear: number): number;
// }

// // Task 4: Create an object using the extended Interface
// const uniStudent: IUniStudent = {
//   studentId: 123,
//   fullName: 'John Doe',
//   university: 'Stanford University',
//   getYearsStudied: (enrollmentYear: number) => {
//     const currentYear = new Date().getFullYear();

//     if (enrollmentYear > currentYear) {
//       throw new Error('Enrollment year cannot be after current year.');
//     }

//     return currentYear - enrollmentYear;
//   },
// };

// // Task 5: Invoke the Interface Function
// const yearsStudied = uniStudent.getYearsStudied(2018);
// console.log(`Years studied: ${yearsStudied}`); // Output: 'Years studied: 5'
