const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

const getTheTitles = function() {
    let titles = books.map(item => item.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

//NOTE TO SELF
//.filter returns an array of objects based on a condition (not extracting all
// key values of type)
//.map extracts all values of a specific key to a new array.  
