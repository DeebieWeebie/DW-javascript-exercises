const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function() {
    people.forEach((element) => {
        element.age = (this.yearOfDeath - this.yearOfBirth);
    });

    const maxAge = Math.max(...people.map(obj => obj.age));
    return people.filter(obj => obj.age === maxAge);
};

// Do not edit below this line
module.exports = findTheOldest;
