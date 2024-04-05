const arr = [2,3,4,7,65,3,90,4]
const maxNo = arr.reduce((max,ele)=>{
    if(max>ele)
    {
        return max;
    }else{
        return ele;
    }
}, arr[0])
console.log(maxNo);