const numbers=[23,5,6,76.45]
let sum=100
sum =numbers.reduce(function(total,num){
    return total+num
})
console.log(sum)