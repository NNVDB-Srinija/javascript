//Singleton  
//If by literals  --not singleton   If by constructor--Singleton

//Object.create   for constructors

//Object literals

//Symbol declaration
const mySym=Symbol("key1")

const JSuser={
    "full name":"Srinija",
    age:19,
    location:"Rajahmundry",
    [mySym]:"mykey1",  //To use it as symbol keep the key in square brackets 
    email:"babysrinija@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//By default it categorizes key as string

//To access objects  --way1
console.log(JSuser.email)

//way2
console.log(JSuser["email"])

// console.log(JSuser.full name)  Gibes an error
console.log(JSuser["full name"])

//If key has a space use square bracket method

console.log(JSuser[mySym]);
console.log(JSuser.mySym);  //prints undefined

JSuser.email="srinija.vit"
//Object.freeze(JSuser)   //To freeze the value  if any changes done on it will not be reflected
JSuser.email="srinija.microsoft"
console.log(JSuser);

JSuser.greeting=function(){
    console.log("Hello Everyone")
}

console.log(JSuser.greeting)  //prints undefined
console.log(JSuser.greeting())// Prints Hello Everyone and then undefined
//We are getting undefined, because there is no return statement in greeting function , and when we explicitly don't return something then the function returns 'undefined' implicitly.
JSuser.greeting() //Prints Hello Everyone

//String interpellation
JSuser.greeting2=function(){
    console.log(`Hello JS user,${this.age}`)  
}
JSuser.greeting2();