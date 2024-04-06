const arr = [1,2,3,4,7,65,3,90,4,120]
const minNo = arr.reduce((min,ele)=>{
    return min<ele?min:ele

}, arr[0])
console.log(minNo);