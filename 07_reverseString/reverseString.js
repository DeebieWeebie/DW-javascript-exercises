
reverseString = function(string) {
    let stringArr = string.split(' ');      // split the string on the space into 2 words into an array
    console.log(stringArr.length);           //2 words are in the word array...n words long
    console.log(stringArr);
    const numWords = stringArr.length;
    const reverseArr = stringArr
    return reverseArr.map(item => item.split('').reverse().join(''));  // split the array words into comma separated letters within each element
                                                                        // then reverse the letters within each element
                                                                        // then join the letters without the commas
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
