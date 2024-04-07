const address ={
    street:'yemlur',
    house:'Nandi sunshine'
}
const extendedAddress ={
    myhome:'Dollar colony'
}
const combinedAddress ={
    ...address,
    ...extendedAddress
}
console.log(combinedAddress);