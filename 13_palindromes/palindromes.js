const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,'');
    const reverseString = cleanString.split('').reverse().join('');    
    return cleanString == reverseString;
};

palindromes("racecar");
palindromes("racecar!");
palindromes("Racecar!");

// Do not edit below this line
module.exports = palindromes;
