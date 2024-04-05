//it can be hoisted means it  can be called before even declaration
let mul = myfunc(2,3)
console.log(mul);

function myfunc(a, b)
{
    return a*b;
}

