//technique-1
function addNumbers(num1 , num2, num3)
{
    return num1+num2+num3;
}
const total = addNumbers(3,5,5)
console.log(total);

//technique-2 - 
function addNumbersNew(num1 , num2, num3)
{
    return num1+num2+num3;
}
const arr = [3,5,7]
const totalNew = addNumbersNew(...arr)
console.log(totalNew);