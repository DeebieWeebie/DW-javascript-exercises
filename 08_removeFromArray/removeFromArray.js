const removeFromArray = function(arr, ...manyMoreArgs) {
    const valuesToDelete = [...manyMoreArgs].filter(item => typeof item === 'number');
    let newArray = [...arr];
    console.log(valuesToDelete);

    for (let i = newArray.length -1; i >= 0; i--) {
        if (valuesToDelete.includes(newArray[i])) {
            newArray = newArray.toSpliced(i, 1);
        }
    }   
    console.log(newArray);
    return (newArray);
};

removeFromArray([1, 2, 3, 4], 7, "tacos"); // added a filter to valuesToDelete for numbers only
                                    
// Do not edit below this line
module.exports = removeFromArray;
