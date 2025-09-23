const sumAll = function(inputA, inputB) {
    let sum = 0;
    if  (inputB > inputA) {
        for (i = inputA; i <= inputB; i++) {
            sum += i;
        }
    } else if (inputA > inputB) {
        for (i = inputB; i <= inputA; i++) {
            sum += i;
        }
    } else {
        console.log("ERROR");
    }
    
    console.log(sum);
    return sum;
};

sumAll(2,4);

// Do not edit below this line
module.exports = sumAll;
