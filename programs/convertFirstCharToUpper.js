const days =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
const newArr =[];
for(let day of days)
{
    day = day.charAt(0).toUpperCase() + day.substring(1)
    newArr.push(day)
}
console.log(newArr);
