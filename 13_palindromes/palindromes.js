const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');  //replace everything that is NOT a letter ot s numnrt
    const noSpaceString = cleanString.replace(/ /g, '');
    const reverseString = noSpaceString.split('').reverse().join('');    
    return noSpaceString == reverseString;
};

palindromes("racecar");
palindromes("racecar!");
palindromes("Racecar!");
palindromes("A car, a man, a maraca.");
palindromes("Animal loots foliated detail of stool lamina.");
palindromes("ZZZZ car, a man, a maracaz.");
palindromes("rac3e3car");
palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
