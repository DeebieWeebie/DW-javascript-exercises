const fibonacci = function(num) {
    let fibArray = [1,1];
        for (let i = 2; i < num; i++) {
            let nextVal = fibArray[i-2] + fibArray[i-1];
            fibArray.push(nextVal);
        }
    return fibArray[num];
};

fibonacci(3);

// Do not edit below this line
module.exports = fibonacci;
