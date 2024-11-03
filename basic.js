const accountId= "144553"   // declare a constant
let accountEmail= "mini21@gamil.com"    //declare a variable
var accountPass = "1234"     //also use var to declare a variable

// prefer not use var because of issue in block scope and functional scope

accountcity = "jaipur"
let accountState;      // this gives the output as undefined

console.log(accountId);      // this only print one item or an element 

console.table([accountId,accountEmail,accountPass,accountcity,accountState]);// this will print all in the form of table 

