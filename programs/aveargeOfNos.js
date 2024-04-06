const arr = [2,3,4,6,7,2,5]

const sumOfNos = arr.reduce((a,b)=>{
    return a+b
},0)
const len= arr.length;
const avg = sumOfNos/len
console.log(avg);