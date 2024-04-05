function reverseNo(num)
{
    if(num>=0&& num<9)
    {
        return num;

    }
    let rev =0;
    while(num>0)
    {
        rem = num%10;
        rev = rev*10+rem
        num=Math.floor(num/10)
    }
    console.log(rev);
    return rev
}
const reverseNoVal= reverseNo(543)
console.log(reverseNoVal);
