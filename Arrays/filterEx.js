const points = [34,45,60,67,100]
pointsFilter = points.filter(function(num){
    return num%2==0
})
console.log(pointsFilter)