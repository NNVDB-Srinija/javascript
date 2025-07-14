//{}  -- scope

if(true)
{
    let a=10
    const b=20
    var c=30
}

// console.log(a);   -- Gives error because it has local scope
//console.log(b);   --- Gives error because it has local scope
console.log(c);     //--Prints 30 because it has global scope

//Therefore it is better to avoid var

// Global scope variables can be used locally
//But local scope variable cannot be used globally


let a=100
if(true)
{
    let a=10
    const b=20
    var c=30
    console.log("Inner a",a);
}
console.log(a);

//The scope in the browser and the vs code is different
//Every curly brackets represents a scope
