const arr = [2,3,4,7,65,3,90,4,120]
const maxNo = arr.reduce((max,ele)=>{
    return max>ele?max:ele

}, arr[0])
console.log(maxNo);