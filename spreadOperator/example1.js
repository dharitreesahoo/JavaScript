const array1= [1,2,3,4,2,2,1]
const array2 = [3,4,5,6,7,8]
//how to add two array
//technique-1
const array3 = array1.concat(array2)
console.log(array3);

//technique-2
// for(let i of array2)
// {
//     array1.push(i)
// }
// console.log(array1);

//technique -3
const combinedArr = [...array1, ...array2]
console.log(combinedArr);

//we can also add some elements in between
const combinedArr1 = [...array1,"jini","maa","papa", 56, 67,...array2]
console.log(combinedArr1);
