let array = ["dog", "cat", "pig"];

function manipulate(callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
    console.log(array[0]);
  }
  return result;
}

// callback functions
function pluralize(word) {
  return `${word}s`;
}

function capitalize(word) {
  return `${word[0].toUpperCase() + word.slice(1)}`;
}

function pigLatin(word) {
  return `${word.slice(1) + word[0] + "ay"}`;
}

console.log(manipulate(pluralize));
console.log(manipulate(capitalize));
console.log(manipulate(pigLatin));
