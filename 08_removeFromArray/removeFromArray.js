const removeFromArray = function(arr, ...manyMoreArgs) {
    const valuesToDelete = [...manyMoreArgs];    //.filter(item => typeof item === 'number');
    let newArray = [...arr];
    console.log(`Vals to delete: ${valuesToDelete}`);

    for (let i = newArray.length -1; i >= 0; i--) {
        if (valuesToDelete.includes(newArray[i])) {
            newArray = newArray.toSpliced(i, 1);
        }
    }   

    console.log(`The returned array is: ${newArray}`);
    return (newArray);
};

removeFromArray([1, 2, 3], '1', 3);
                                    
// Do not edit below this line
module.exports = removeFromArray;
