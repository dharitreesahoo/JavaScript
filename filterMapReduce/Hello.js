var animals = ["cat","dog","fish"];
var threeLetterAnimals = [];
for (let count = 0; count < animals.length; count++){
  if (animals[count].length === 3) {
    threeLetterAnimals.push(animals[count]);
  }
}
console.log(threeLetterAnimals); // ["cat", "dog"]
console.log(animals); // ["cat", "dog"]
//_______
//Filter method
var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(function(animal) {
  return animal.length === 3;
});
console.log(threeLetterAnimals); // ["cat", "dog"]
//______
const animals = ["cat","dog","fish"];
function exactlyThree(word) {
  return word.length === 3;
}
const threeLetterAnimals = animals.filter(exactlyThree);
console.log(threeLetterAnimals); // ["cat", "dog"]
//******************************************************** */
//Map

const animals = ["cat","dog","fish"];
const lengths = animals.map(getLength);
function getLength(word) {
  return word.length;
}
console.log(lengths); //[3, 3, 4]

//-------------
//******************************************************* */
//Reduce
const animals = ["cat","dog","fish"];
const total = animals.reduce(addLength, 0);
function addLength(sum, word) {
  return sum + word.length;
}
console.log(total); //10

//******************************************************** */
//chain
const animals = ["cat","dog","fish"];
let threeLetterAnimalsArray = [];
let threeLetterAnimals;
let item;
for (let count = 0; count < animals.length; count++){
  item = animals[count];
  if (item.length === 3) {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    threeLetterAnimalsArray.push(item);
  }
}
threeLetterAnimals = threeLetterAnimalsArray.join("");
console.log(threeLetterAnimals); // "CatDog"
//---------------------------
const animals = ["cat","dog","fish"];
function studlyCaps(words, word) {
  return words + word;
}
function exactlyThree(word) {
  return (word.length === 3);
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const threeLetterAnimals = animals
  .filter(exactlyThree)
  .map(capitalize)
  .reduce(studlyCaps);
  console.log(threeLetterAnimals); // "CatDog"

