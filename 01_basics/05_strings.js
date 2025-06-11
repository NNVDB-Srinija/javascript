const name="Srinija"
const repoCount=50

console.log(name+repoCount+" Value")   //Old Method

console.log(`Hello my name is ${name} and myy repo count is ${repoCount}`);
//New Method- String interpolation  -- Enclose the string in backticks (`` ` ``)
//Embed expressions using ${}

const gameName=new String('Srinija-B.tech-CSE')  //Declarartion of String
//If we declare like this in console, It will give key value pairs and many methods

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);  //To find prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-2,4)
console.log(anotherString);

const ns1="         Srinija      "
console.log(ns1);
console.log(ns1.trim());

const url="https://github.com/code%20spaces"
console.log(url.replace('%20','-'))
console.log(url.includes('hi'));
console.log(url.includes('git'));

console.log(gameName.split('-'));
//Divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.



