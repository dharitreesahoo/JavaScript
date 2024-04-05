const arr = [{ name: "jini", sal: 100 },
{ name: "mama", sal: 2000 },
{ name: "rani", sal: 400 }]

const sum1 = arr.reduce((total, item) => {
    return total + item.sal
}, 0)

console.log(sum1);