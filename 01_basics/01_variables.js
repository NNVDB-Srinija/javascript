const accountId=2736    //Cannot be changed
let accountEmail="srinija@email.com" //Can be changed 
var pass="1234"  //Can be changed
accountCity="Jaipur"   //Can be changed-- should not be used-- not a good practice
let accountState; // If we does not assign a value then it would be shown as 'undefined'

// var has a scope problem
// let does not have scope problem

/*
Prefer not to use 'var;
because of issue in block scope and functional scope
*/

// accountId=34  // not allowed
accountEmail="eguegfu"
pass="38647"
accountCity="Rajahmundry"

console.log(accountId);

console.table([accountEmail,pass,accountCity,accountState])

