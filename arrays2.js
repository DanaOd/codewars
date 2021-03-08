// console.log("1 task array - Shortest word");

// // Simple, given a string of words, return the length of the shortest word(s).

// // String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//     const lengthArr = [];
//     s.split(" ").forEach((item) => {
//         console.log(item.length);
//         lengthArr.push(item.length);
//         console.log(lengthArr);
//     });
        
//     return Math.min(...lengthArr);
// }

// findShort("bitcoin take over the world maybe who knows perhaps");


//=====================

console.log("2 task array - Square Every Digit");

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer



function squareDigits(num) {
    let stringDigits = String(num).split("");
    // console.log(stringDigits);
    
    return console.log(Number(stringDigits.map(numb => {
        numb = Number(numb);
        let square = numb * numb;
        let total = "";
        total+= square;
        return total;
    }).reduce((acc, value) => acc + value)));
}

squareDigits(9119); // 811181