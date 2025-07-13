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