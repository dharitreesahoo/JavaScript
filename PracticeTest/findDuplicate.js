const arr =[2,3,4,5,6,7,8,9,9]
const fineDuplicate = arr.filter((ele, index,arr)=>{
    return arr.indexOf(ele)!==index
})
console.log(fineDuplicate);