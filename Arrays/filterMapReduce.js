const animals = ["cat","dog","fish"];

var total =animals.filter(function(animal){
    return (animal.length === 3);
}).map(function(ele){
    return ele.toUpperCase()
}).reduce(function(sum , val){
    return sum=sum+"-"+val
},"jini")
console.log(total)