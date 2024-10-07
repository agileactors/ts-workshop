TypeScript Interface Exercise

Task 1: Define a basic Interface
Create an interface named 'IStudent' that should have the following properties:

- 'studentId' of type number
- 'fullName' of type string
  This interface represents the basic structure of a student object.

Task 2: Extend the Interface
Extend the 'IStudent' interface to create a new interface named 'IUniStudent'.
Add the following to 'IUniStudent':

- an optional property named 'isEnrolled' of type boolean.
- a readonly property named 'university' of type string.

Task 3: Function Type in Interface for Simple Calculation
Add a method signature to the 'IUniStudent' interface.
The method, named 'getYearsStudied', should accept an enrollment year
of type number and return the number of years studied.

Task 4: Create an object using the extended Interface
Create a 'uniStudent' object that implements the extended interface.
Provide values for all the properties, including the inherited ones from 'IStudent'.

Task 5: Invoke the Interface Function
Use the 'getYearsStudied' method on the 'uniStudent' object.
Pass an enrollment year to the method and output the number of years studied.
