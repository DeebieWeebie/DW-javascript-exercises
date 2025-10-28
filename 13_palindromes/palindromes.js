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

// THEIR SOLUTION
const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
