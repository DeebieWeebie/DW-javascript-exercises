const fibonacci = function(num) {
    let fibArray = [1,1];
    integer = parseInt(num);

        if (integer > 2) {
            for (let i = 2; i < integer; i++) {
                fibArray[i] = fibArray[i-2] + fibArray[i-1];
                fibArray.push(fibArray[i]);
            }
            return fibArray[integer];
        } else if (integer == 0) {
            let zeroVal = 0;
            return zeroVal;
        } else if (integer < 0) {
            let userMessage = "OOPS";
            return userMessage;
        } else if (1 <= integer <= 2) {
            return fibArray[(integer -1)];
        }
};

fibonacci(3);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");

// THEIR SOLUTION

// const fibonacci = function(countArg) {
//     // checks argument's type and makes sure we use 
//     // a number throughout rest of function.
//     let count
//     if (typeof countArg !== 'number') {
//         count = parseInt(countArg)
//     } else {
//         count = countArg
//     }

//     if (count < 0) return "OOPS";
//     if (count == 0) return 0;

//     let firstPrev = 1;
//     let secondPrev = 0;

//     for (let i = 2; i <= count; i++) {
//         let current = firstPrev + secondPrev;
//         secondPrev = firstPrev;
//         firstPrev = current;
//     }

//     return firstPrev;

// };

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

// Do not edit below this line
module.exports = fibonacci;
