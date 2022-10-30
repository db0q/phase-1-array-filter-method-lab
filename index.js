// Code your solution here
function findMatching(droiversArr, name) {
    return droiversArr.filter(
       (matching) => matching.toLowerCase() === name.toLowerCase()
    );
  }
  function fuzzyMatch(droiversArr ,testString){
    return droiversArr.filter(
        (possibleMatch) =>
          possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
      );
  }
  function matchName(droiversArr, name) {
    return droiversArr.filter((matchName) => matchName.name === name);
  }