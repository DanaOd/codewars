console.log("1 task array - remove every second element ");


// function removeEveryOther(arr) {
//     return console.log(arr.filter((_, idx) => idx % 2 === 0));
// }

// const myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];

// removeEveryOther(myArr);

//=====================

// console.log("2 task  - remove dublicates ");
// //Define a function that removes duplicates from an array of numbers and returns it as a result.

// function distinct(a) {
//     return a.filter((item, index) => a.indexOf(item) === index);
// }

// distinct([1, 1, 2]);

//=====================


// console.log("3 task  - calculate positive");

// function positiveSum(arr) {
//   return arr.filter(num=>num>0).reduce((acc, num)=>acc+num, 0 )
// }

// const array = [1, -2, 3, 4, 5]; //13
// console.log(positiveSum(array));

//=====================


console.log("4 task  - Find the Capitals");

// Complete the method that takes a sequence of objects with two keys each: country or state, and capital.
// Keys may be symbols or strings.

// The method should return an array of sentences declaring the state or country and its capital.

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

// SOLUTION

function capital(capitals){
  return capitals.map(c => `The capital of ${c.state||c.country} is ${c.capital}`);
}

console.log(capital(state_capitals));