const arr =[3,4,5,5,6,7,8,9]
const newArr = arr.reduce((sum,ele)=>{
    return sum+ele
},0);
console.log(newArr);