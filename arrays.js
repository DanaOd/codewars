console.log("1 task array - remove every second element ");


// function removeEveryOther(arr) {
//     return console.log(arr.filter((_, idx) => idx % 2 === 0));
// }

// const myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];

// removeEveryOther(myArr);

//=====================

console.log("2 task  - remove dublicates ");
//Define a function that removes duplicates from an array of numbers and returns it as a result.

function distinct(a) {
  return a.filter((item, index)=>a.indexOf(item)=== index)
}


distinct([1,1,2]);