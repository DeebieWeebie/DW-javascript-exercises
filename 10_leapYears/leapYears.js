const leapYears = function(year) {
    let leapYear = 0;
    let userMessage = 'false';
    do {
        if (year % 100 === 0 && year % 400 === 0) {
            const leapYear = year;
            return userMessage = 'true';

        } else if (year % 100 !== 0) { 
            const leapYear = year;
            return userMessage = 'true';
        } else {
            return userMessage = 'false'
        }

    } while (year % 4);
};

leapYears(1600);

// Do not edit below this line
module.exports = leapYears;
