const arr = [{name:"jini",id:3,roll:34},
                {name:"mama", id:4, roll:21 },
                {name:"santoo", id:7, roll:12}]

const filteredArr = arr.filter((ele)=>{
    return ele.roll>21
})
console.log(filteredArr);