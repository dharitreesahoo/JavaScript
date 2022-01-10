const numbers=[23,5,6,76.45]
//initial value taken as 100
sum =numbers.reduce(function(total,num){
    return total+num
},100)
console.log(sum)