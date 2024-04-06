const arr =[3,4,6,7,43,23,12,78,89,89]

const arrNew = arr.filter((ele,index, arr)=>{
   return  arr.indexOf(ele)==index
}).sort((a,b)=>{
    return a-b
})
console.log(arrNew);