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


// console.log("4 task  - Find the Capitals");

// // Complete the method that takes a sequence of objects with two keys each: country or state, and capital.
// // Keys may be symbols or strings.

// // The method should return an array of sentences declaring the state or country and its capital.

// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

// // SOLUTION

// function capital(capitals){
//   return capitals.map(c => `The capital of ${c.state||c.country} is ${c.capital}`);
// }

// console.log(capital(state_capitals));

//=====================


console.log("5 task  - replace and return nymbers");

// Return an array containing the numbers from 1 to N, where N is the parametered value.
// N will never be less than 1(in C#, N might be less then 1).

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

const arr = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']; //result for 10

function fizzbuzz(n) {
    //1. заполнить массив от 1 до n - 
    const array = [];
    for (let i = 1; i <= n; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            array.push("Fizz");
        }
        else if (i % 5 === 0) {
            array.push("Buzz");
        }
        else {
            array.push(i);
        }
    }
    return console.log(array);

}

fizzbuzz(16);