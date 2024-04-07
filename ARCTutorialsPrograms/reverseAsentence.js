const str= "welcome to my Home";
// const strNew = str.split(' ').reverse().join(' ');
// console.log(strNew);

function reverseASen(str , separator)
{
    const strNew = str.split(separator).reverse().join(separator);
    console.log(strNew);
}
reverseASen(str,' ')
