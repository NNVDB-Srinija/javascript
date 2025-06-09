let score=false

console.log(typeof score)
console.log(typeof(score));

let valueinNumber=Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber);

// "33"  ==> 33
//"33abc"  ==>NaN
//true  ==> 1     false ==>0
//null  ==>0
//undefined   ===> NaN

let isLogIn="sri"

let booleanLogIn  = Boolean(isLogIn)
console.log(booleanLogIn)

// 1  ==>true   0 ==>false
//"" (empty string)==> false
//"Srinija"  ==>true

let sNum=43

let stringNum=String(sNum)
console.log(stringNum)
console.log(typeof stringNum)


//  ****************** OPERATIONS ***********

let value=3
let negValue=-value

// console.log(3+3)
// console.log(3*3)
// console.log(2**7)
// console.log(4-3)


let str1="hello"
let str2="srinija"

let str3=str1+str2
console.log(str3)

console.log("1"+2);  //Prints 12
console.log(1+"2");  //Prints 12
console.log("1"+"2");    //Prints 12

console.log("1"+2+2)   //Prints 122
console.log(1+2+"2");   //Prints 32

console.log(true);  //prints true

console.log(+true)  //prints 1
console.log(+"");   //prints 0

let gameCounter=100;
gameCounter++;
console.log(gameCounter++);  //Postfix operation: first prints the value in the variable and then
console.log(gameCounter);




