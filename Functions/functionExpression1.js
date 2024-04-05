//function expression cannot be hoisted
//it can be called only after the function declaartion
//In memeory managament point of view this is good as it wont store it in memeory until its called

//const sumOfNos = sum(2,3) cannot be called here
//console.log(sumOfNos);cannot be called here

sum = function(a , b)
{
    return a*b;
}
const sumOfNos = sum(2,3)
console.log(sumOfNos);