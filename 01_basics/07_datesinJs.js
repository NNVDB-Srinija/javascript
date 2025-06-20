//Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23)  //In JS months start from 0
console.log(myCreatedDate.toDateString());

myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());

myCreatedDate=new Date("2023-01-14") 
console.log(myCreatedDate.toLocaleString());
 
myCreatedDate=new Date("01-14-2023") 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1)

//`${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));