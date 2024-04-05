//trick -1
let str = "GeeksforGeeks"; 
  
let arr = str.split(""); 
console.log(arr);

//trick -2 
let arr1 = Array.from(str);
console.log(arr1);

//trick 3
console.log([...str]);

//trick -4

const s='dharitree'

const a=[];
for (const ele of s) {
    a.push(ele)
}
console.log(a);
