let arr = [{name:"jini", roll:12},
{name:"mama",roll:23},
{name:"mama",roll:23}]

const arr1 = Array.from(new Set(arr.map((ele)=>
{
   return  ele.roll
})));
console.log(arr1);