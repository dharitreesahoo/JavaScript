const arr=[24,56,3,45,98]
sum=""
arr.forEach(function(val){
    if(val%2==0)
    {
        sum = sum +", "+val
    }
})
console.log(sum)