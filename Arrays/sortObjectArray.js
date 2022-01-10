const cars = [
    {type:"volvo","year":2017},
    {type:"sabb","year":2019},
    {type:"BMW","year":2010},
];
cars.sort(function(a,b){
return a.year-b.year
});
console.log(cars)