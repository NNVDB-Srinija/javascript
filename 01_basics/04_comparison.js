// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2<1)
// console.log(2!=1)

console.log("2">1)
console.log("02">1)

console.log(null>0)  //false
console.log(null==0)  //false
console.log(null>=0)  //false
/*The reason is that an equality check == and comparisons > < >= <= work differently
Comparisons convert null to a number, treating it as 0,
Thats why null>=0 is true and null>0 is false */

console.log(undefined>0)  //false
console.log(undefined==0)  //false
console.log(undefined>=0)  //false

//  Strict check ===  It not only checks the value but also checks the datatype

console.log("2"==2)  //true
console.log("2"===2);  //false

//Clean code is the main priority-- So we not usually compare between different datatypes
