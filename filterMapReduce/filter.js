var arr=[2,3,4,5,6,7]
result = arr.filter(function(num)
{
    return num%2==0
}).map(function(num){
    return num*3
}).reduce(function(sum , num){
    return sum+num
})
console.log(result)