let arr = [{name:"jini", roll:12},
{name:"mama",roll:23},
{name:"mama",roll:23}]

// const arr1 = Array.from(new Set(arr.map((ele)=>
// {
//    return  ele.roll
// })));
// console.log(arr1);


// const arr1 = Array.from(new Set(arr.map((ele)=>{
//    return ele.roll
// })));
const arr1 = arr.map((ele)=>{
   return ele.roll
}).filter((ele)=>{
   return ele.name=="mama"
})
console.log(arr1);