const palindromes = function (string) {
    let reverseString = string.split('').reverse().join('');    // split the word into single letters within each element of an array
                                                                // then reverse the letters within each element
                                                                // then join the letters
    if (string == reverseString) {
        return true;
    } else {
        return false;
    }
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
