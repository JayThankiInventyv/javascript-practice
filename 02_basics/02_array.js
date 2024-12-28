const marvel_heros = ["thor","Ironman","spderman"]
const dc_heros = ["superman","flash","batman"]

const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array)

console.log(Array.isArray("Jay"));
console.log(Array.from("Jay"))
console.log(Array.from({name:"jay"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



