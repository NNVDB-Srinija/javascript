//Primitive

//7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scorevalue=100.3

const LoggedIn=true
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid); 
//Even if both are same, but they are in the datatype symbol so they are treated as different

const bigNumber=72362795473434865323n
//If we put 'n' at last then it would become BigInt

//*************************************************************************


// Reference Type (Non primitive)

//Array, Objects, Functions

const heros=["thor","ironman","spiderman"];
let myObj={
    name:"Srinija",
    age:19,
}

const myFunction=function() {
    console.log("Hello World");
}

console.log(typeof outsidetemp) // It prints object because:- typeof null is object

console.log(typeof myFunction) 
console.log(typeof heros) //It prints object because normally arrays are of type object