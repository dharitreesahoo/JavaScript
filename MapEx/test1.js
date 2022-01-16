let map = new Map();
map.set("jini","first")
map.set("jini1","first1")
console.log(map.keys)
map.has("jini")
console.log(map.get("jini"))

for(let [k,v] of map)
{
    console.log(k,":",v)
}