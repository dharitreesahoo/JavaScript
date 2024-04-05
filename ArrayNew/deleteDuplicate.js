const arr = ["lunch","breakfast","lunch"]
const arr1 = Array.from(new Set(arr));
const arr2 = [...new Set(arr)];
console.log(arr1);
console.log(arr2);