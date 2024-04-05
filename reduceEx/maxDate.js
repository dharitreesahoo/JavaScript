const dates = ['01/08/2022',
'02/08/2022',
'04/08/2022',
'04/07/2022'].map(v=>new Date(v));
const maxDate = dates.reduce((max,d)=>{
    return d>max?d:max
}, dates[0])

console.log(maxDate.toLocaleDateString());