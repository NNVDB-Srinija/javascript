const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)  //It puts dc_heros array as a single element in marvel_heros array
//Push adds the second array into the first array

// console.log(marvel_heros)

const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);  
//Concat makes a new array with all the elements in both the arrays

// Spread operation
const all_newHeros=[...marvel_heros,...dc_heros]

console.log(all_newHeros)

//It is same as "concat" operation but in concat we can combine only 2 arrays whereas using this spread we can combine 2 or more arrays

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);  
//flat(depth) -- To make all elements in a single array
// Used for data scraping

console.log(Array.isArray("Srinija"))

console.log(Array.from("Srinija"))   //To make an array
console.log(Array.from({name:"Srinija"}))   //Interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));