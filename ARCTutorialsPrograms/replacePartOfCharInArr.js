let arr = ["banaglore","banaras","banana","baripada","badichore"]
let arr1 = arr.map((ele)=>{
    return ele.replace(/ban/g,"jini")
})
console.log(arr1);