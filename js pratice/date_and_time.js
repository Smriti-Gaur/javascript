//numbers 
//functions
// .Min_value
// .Max_value
//(toLocaleString())// give value seperated by comma 

// math values -- Math.abs(-4) , Math.round(4.3)->4(4.6)->5 , Math.ceil(4.3)->5 , Math.floar(4.3)->4,
//Math.sqrt(3) Math.min(1,2,3),Math.max , Math.random()-- 0 to 1

// const min =  10
// const max = 20
// console.log(Math.floar(Math.random()*(max - min + 1)) +min )



// Dates --- it is an object in js
// js date object represent a single movement in time in a platform independent format 
//dateobject represent in milliseconds since the midnight at the begning of jan 1 ,1970,UTF(the epoch ).  
// **** months start with 0 in js *****

let mydate= new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString()) -- wed mar 01 2023
// console.log(mydate.toISOString())--
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleString())//  3/1/2023 ,  12:04:46 PM
// console.log( typeof(mydate))

let MyCreatedDate = new Date(2024 , 0 , 21)
//console.log(MyCreatedDate.toDateString()); //-- sun jan 21 2024

let MyTimeStamp = Date.now()
// console.log(MyTimeStamp)
// console.log(MyCreatedDate.getTime());

// console.log(Date.now()/1000)


// newDate.toLocalString('default' ,{
//     weekday : "long" 
//})