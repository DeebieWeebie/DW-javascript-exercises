
reverseString = function(string) {
    // let stringNoSpace = string.split(' ');      // split the string on the space into 2 words into an array
    // console.log(stringNoSpace.length);           //2 words are in the word array...n words long
    //  console.log(stringNoSpace);
    // const reverseString = stringNoSpace
    return string.split('').reverse().join('');  // split the array words into comma separated letters within each element
                                                                        // then reverse the letters within each element
                                                                        // then join the letters without the commas
};

console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;
