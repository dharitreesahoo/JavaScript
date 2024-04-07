let str = "Madam"
str = str.toLowerCase();

const strNew = str.split('').reverse().join('')
console.log(strNew);
if(str==strNew)
{
    console.log("Palindrome");
}else{
    console.log("not palindrome");
}
