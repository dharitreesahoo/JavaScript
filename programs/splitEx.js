let str = "it was a dark and storm night   and feeling good"
const words = str.split(/\W+/).filter(word=>word.length>5)
console.log(words);

//https://www.youtube.com/watch?v=MWD-iKzR2c8
