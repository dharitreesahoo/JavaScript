const arr =[3,4,5,5,6,7,8,9]
const filteredArr = arr.filter((ele)=>{
    return ele%2==0
})
console.log(filteredArr);


const filterArr1 = arr.filter((ele)=>{
    return ele>4
})
console.log(filterArr1);