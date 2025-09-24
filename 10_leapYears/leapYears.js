const leapYears = function(year) {
    if (year % 4 !== 0) {
        return false;
    } else {
        do {
            if (year % 100 === 0 && year % 400 === 0) {
                return true;
            } else if (year % 100 == 0) { 
                return false;
            } else if (year % 100 !== 0){
                return true;
            }
        } while (year % 4 === 0);
    } 
};

leapYears(700);

// THEIR SOLUTION
const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

