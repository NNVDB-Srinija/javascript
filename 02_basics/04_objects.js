const tinderUse1=new Object();   //Singleton onject
const tinderUser={}  //Non-singleton object

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLogged=false;

console.log(tinderUser);

//We can do nesting in objects in javascript
const regularUser={
    email:"sone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sri",
            lastname:"Nookala"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

//Know the use of question mark in javascript

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// To add 2 objects in 1 object
//const obj3={obj1,obj2}  //Prints { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//To combine all the values in objects into a single object
const obj3=Object.assign({},obj1,obj2) //the curly braces are used as target if we do not give then all will be stored in first object
console.log(obj3) //Prints { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

obj4={...obj1,...obj2}  //spreding method
console.log(obj4)  //Prints { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users=[
    {
        id:1,
        email:"some@gmail.com"
    }
]

//sers[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))


//De-structuring

const course={
    coursename:"js",
    price:"999",
    courseIns:"hitesh"
}

//course.courseIns
const{courseIns}=course
const{courseIns:ins}=course
console.log(ins);

//Curly brackets means de-structuring property

//APIs
//apis can be in the format of arrays

//use json formatter to format the api
