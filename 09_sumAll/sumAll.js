const sumAll = function(inputA, inputB) {
    let sum = 0;
    let userMessage = 'blank';

    if (!Number.isInteger(inputA) || !Number.isInteger(inputB) || inputA < 0 || inputB < 0) {
        return 'ERROR';
    } else if (inputB > inputA) {
        for (i = inputA; i <= inputB; i++) {
            sum += i;
        }
    } else if (inputA > inputB) {
        for (i = inputB; i <= inputA; i++) {
            sum += i;
        }  
    }
    
    console.log(userMessage);
    console.log(sum);
    
    return sum;
};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
