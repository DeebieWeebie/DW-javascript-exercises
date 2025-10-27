const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,'');
    const noSpaceString = cleanString.replace(/ /g, "");
    const reverseString = noSpaceString.split('').reverse().join('');    
    return noSpaceString == reverseString;
};

palindromes("racecar");
palindromes("racecar!");
palindromes("Racecar!");
palindromes("A car, a man, a maraca.");
palindromes("Animal loots foliated detail of stool lamina.");

// Do not edit below this line
module.exports = palindromes;
