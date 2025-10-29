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

// Do not edit below this line
module.exports = fibonacci;
