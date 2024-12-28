const name = "jay"
const repocount = 20

console.log(`Hello! My name is ${name} and my repo count is ${repocount}`);

const gameName = new String("jay-jt-com")
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jay.com/jay%20thanki"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));