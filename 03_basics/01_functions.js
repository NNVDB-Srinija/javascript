function sayMyName()
{
    console.log('s');
    console.log('r');
    console.log('i');
}
sayMyName()

function addTwoNumbers(number1,number2)  //No need to write the datatype in javascript
{
    console.log(number1+number2)
}
addTwoNumbers(2,null)
const res=addTwoNumbers(3,8)
console.log("result:"+res);  // res is showing undefined because the function is just printing the value and not storing it
//In function definition we call them as parameters
//In function call we call them arguments

function retaddTwoNumbers(number1,number2)  //No need to write the datatype in javascript
{
    let result=number1+number2
    return result
}
//The function does not execute any lines after the return line

result=retaddTwoNumbers(3,134);
console.log(result)

function loginUserMessage(username)
{
    return `${username} just logged in`
}

console.log(loginUserMessage('Srinija'));
console.log(loginUserMessage())  //Prints undefined

function ifloginUserMessage(username)
{
    if(username===undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(ifloginUserMessage('Srinija'));
console.log(ifloginUserMessage())  

//undefined  = false
//empty string = false

function defloginUserMessage(username="Sam")
{
    if(username===undefined)   // This block will never be executed because we gave a default value for the parameter
    {
        console.log("Please enter a username");
        return
    }  
    return `${username} just logged in`
}

console.log(defloginUserMessage('Srinija'));
console.log(defloginUserMessage())  


// What if we don not know the no of parameters we need to take for example in an ecommerce app we do not know how many products the customers add then

function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(2,3,4))

// ...(Three dots)  -- spread operator/ rest operator called according to its use in that context
//we can pass multiple values using rest operator

function calculateCartPrice1(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPrice1(2,3,4,9,95))
//Prints only 4,9,95 because the values are stored in val1 and val2 and we are not returning those The parameters are passed in order

const user={
    username:"hi",
    price:876
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

//If there is a difference in variables it gives undefined in the place of that variable
//This is solved in TypeScript

handleObject({
    username:"Sam",
    price:9374
})

const newArray=[200,2394,9473,398]
function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(newArray))
console.log(returnSecondValue([45,35,34,22]))