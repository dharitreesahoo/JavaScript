const arr =[3,5,6,7,8,,2,24,45]
toDelete = 24
const arrNew = arr.filter((ele)=>{
    return ele!==toDelete
})
console.log(arrNew);