const score = 400
const balance = new Number(400)
console.log(balance.toFixed(1))

const other = 123.34656
console.log(other.toPrecision(4))

const rupee = 1000000
console.log(rupee.toLocaleString('en-IN'))


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)