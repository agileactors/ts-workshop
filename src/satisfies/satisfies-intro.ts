//Satisfies Operator

//Introduced in TS 4.9 is a type annotation operator that allows you to add type annotations to values without using type inference.

//Why do we need it?

type PersonName = 'John' | 'Jack' | 'Justin';

type OtherDetails = {
  id: number;
  age: number;
};

type PersonInfo = PersonName | OtherDetails;

type Person = {
  myInfo: PersonInfo;
  myOtherInfo: PersonInfo;
};

//The Person type has two properties, myInfo and myOtherInfo, both of which will be of type personInfo. This indicates that both properties can either be personName or otherDetails

const applicant: Person = {
  myInfo: 'John',
  myOtherInfo: { id: 123, age: 22 },
};

//Error: Property 'toUpperCase' does not exist on type 'PersonInfo'. Property 'toUpperCase' does not exist on type 'OtherDetails'. Manual validation is needed...
// applicant.myInfo.toUpperCase();

//Solution ?
const applicantWithSatisfies = {
  myInfo: 'John',
  myOtherInfo: { id: 123, age: 22 },
} satisfies Person;

applicantWithSatisfies.myInfo.toUpperCase();
