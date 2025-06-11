const score=400
console.log(400)

const balance=new Number(100.976)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=123.8966
console.log(otherNumber.toPrecision(2));

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));//Default is US values

//+++++++++++++++++++++++++++++++++++++   Maths ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));// Give smallest Integer greater than the given number
console.log(Math.floor(4.8));//Retirns largest integer lesser than the given number
console.log(Math.min(4.8,3.6,7.4));
console.log(Math.max(4.8,3.6,7.4));

console.log(Math.random())  //Gives random number between 0 and 1
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10+1))

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//Gives random word between the given numbers
