//https://www.youtube.com/watch?v=oJoZbJ58zSI&list=PLp50dWW_m40UwtiT-sWJ2ktGcLaNXNG9F&index=3
const arr = [2,3,4,5,6,32,21,32,56,56]
const newArr = arr.filter((ele , index , arr)=>{
    return arr.indexOf(ele)!==index
})

console.log(newArr);