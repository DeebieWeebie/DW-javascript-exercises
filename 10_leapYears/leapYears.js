const leapYears = function(year) {
  
    do {
        if (year % 100 === 0 && year % 400 === 0) {
            return true;

        } else if (year % 100 !== 0) { 
            return true;
        } else {
            return false;
        }

    } while (year % 4);
};

leapYears(1600);

// Do not edit below this line
module.exports = leapYears;
