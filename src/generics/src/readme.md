Exercise

Let's say we have 2 functions that take a specific key string as argument which is fully defined
fooA and fooB that consume an API. Now fooA can only get 'A' as argument while fooB can get 'B'
and depening on values 'A' OR 'B' and the corresponding response should be AResponse OR BResponse.

In the end you should have something like this:

foo('A').then((data) => {
console.log(data); //data is AResponse
});

Use the initial.ts file to start your implementation it includes AResponse and BResponse
