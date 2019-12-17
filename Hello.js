function isAboveRange(value){
    return value>5;
}
var filtered=[12,3,4,5,6,7].filter(isAboveRange);
console.log(filtered);