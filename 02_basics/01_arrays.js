// Array
//It is shallow copy Means reference type

const myArr=[0,1,2,3,4,5]
const myHeros=["IronMan","Thor"]

const myArr2=new Array(1,2,3,4)

console.log(myArr[0])
console.log(myArr2[1])

//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)

myArr.unshift(9)  // To insert the value at the start
console.log(myArr)

myArr.shift()     // To remove the first element
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

console.log(myArr);

const newArr=myArr.join()

console.log(myArr)
console.log(newArr);
console.log(typeof newArr)

// slice   , splice
//----------------------
console.log("A ",myArr)

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr)

const myn2=myArr.splice(1,3)  // In splice the last number will also be included
                              //The numbers will be deleted from the original array
console.log(myn2);
console.log("C ",myArr)

// Slice does not manipulate the original array
// Splice manipulates the original array
