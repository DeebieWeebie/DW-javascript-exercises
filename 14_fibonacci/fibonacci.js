const fibonacci = function(num) {
    let fibArray = [1,1];
        if (num > 2) {
            for (let i = 2; i < num; i++) {
                fibArray[i] = fibArray[i-2] + fibArray[i-1];
                fibArray.push(fibArray[i]);
                return fibArray[num]
            }
        } else if (num = 0) {
            return 0;
        } else if (num < 0) {
            return "OOPS";
        } else {
            return fibArray[(num - 1)];
        }
    return fibArray[num];
};

fibonacci(3);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);

// Do not edit below this line
module.exports = fibonacci;
