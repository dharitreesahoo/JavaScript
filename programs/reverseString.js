const str = "dharitree"
const strArr = Array.from(str);
const reverse = strArr.reduce((sum , ele)=>{
    return ele+sum;
})
console.log(reverse);