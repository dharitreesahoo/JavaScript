let arr =[3,5,6,7,7,2,7,8,19,56,23]

let biggest = arr.reduce((max, val)=>{
    return max>val?max:val
})
console.log(biggest);

//return not needed when we dont have {}
let biggest1 = arr.reduce((max, val)=>max>val?max:val)
console.log(biggest1);