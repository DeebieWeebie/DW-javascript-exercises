
const number = Math.floor(Math.random() * 1000);
console.log(number);

const repeatString = function(string, number) {

    let string2 = ''; 

    if (number === 0) {
        return string2;
    } else if (number <0) {
        return string2 = "ERROR";
    } else {
        for(let i = 0; i < number; i++) {
            string2 += string;
        }
    }

    return string2;
};

console.log(repeatString('', number));

// SOLUTION

// const repeatString = function (word, times) {
//   if (times < 0) return "ERROR";
//   let string = "";
//   for (let i = 0; i < times; i++) {
//     string += word;
//   }
//   return string;
// };


// const repeatString2 = function(string, num) {
//     let string2 = ''

//     if (num === 0) {
//         return string2;

//     } else {
        
//         for(let i = 0; i < num; i++) {
//             string2 += string;
//         }
//     }

//     return string2;
// };

// console.log(repeatString2('hello', 10));
// console.log(string2);


// const repeatString3 = function(string, num) {
//     let string2 = ''

//     if (num === 0) {
//         return string2;

//     } else {
        
//         for(let i = 0; i < num; i++) {
//             string2 += string;
//         }
//     }

//     return string2;
// };

// console.log(repeatString3('hi', 1));
// console.log(string2);

// const repeatString = function(string, num) {
//     let string2 = ''

//     if (num === 0) {
//         return string2;

//     } else {
        
//         for(let i = 0; i < num; i++) {
//             string2 += string;
//         }
//     }

//     return string2;
// };

// console.log(repeatString ('bye', 0));
// console.log(string2);

// Do not edit below this line
module.exports = repeatString;
