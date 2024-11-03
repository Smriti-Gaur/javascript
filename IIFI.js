// Immeadiately Invoked Function Expression (IFFI)

//  NAMED IFFI 

// (function code(){
//     console.log(`DB CONNECTED`)
// })(); // semicolon is mandatory to end the process here 
//  // it is used to remove the global scope variable pollution 

// UNNAMED IFFI
 ((name)=>{
    console.log(`DB 2 CONNECTED ${name}`)
 })('smriti')