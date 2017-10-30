function findMatching(array, name){
  const newArray = array.filter(
    function(n) {return n.toUpperCase() === name.toUpperCase()}
  )
  return newArray
}

function fuzzyMatch(array, letters){
  let nameLength = letters.length;
  const newArray = array.filter(
    function(element) {
      return element.slice(0, nameLength) === letters;
    }
  )
  return newArray;
}

function matchName(obj, word){
  return obj.filter(
    function(object){return object.name === word}
  )
}
