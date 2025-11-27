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
    const peopleWithAges = people.map(person => ({
        ...person, age: person.yearOfDeath - person.yearOfBirth
    }));

    const maxAge = Math.max(...peopleWithAges.map(person => person.age));
    const oldestPeople = peopleWithAges.filter(person => person.age === maxAge);
    
    return oldestPeople[0].name;
  };

  const nameOfOldest = findTheOldest(people);
  console.log(nameOfOldest);
  
// Do not edit below this line
module.exports = findTheOldest;
