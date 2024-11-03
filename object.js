//Objects are fundamental data structures in JavaScript that represent entities with properties and methods. 
// They are used to store and organize data, and to define the behavior of objects.


//Singleton
// Object.create // object cunstructer

//Object literals
// const jsUser = {}-----empty object
const mysym = Symbol("key1")
const jsUser = {
    name: "Smriti",
    age: 18,
    "hobbie":"Dancing",
    [mysym]:"mykey1",// symbol must in square brackets 
    location: "Noida",
    isLoggedIN: false,
    lastLoginDays:['Monday', 'Saturday']
}

// console.log(jsUser["hobbie"])   //--- this will apply on line no. 10 because key is explicitly declare as a string
// console.log(jsUser.age);//---- this will use rest of the cases
//console.log(jsUser[mysym]);

// Changing object values
jsUser.age = 17
//Object.freeze(jsUser) // --- after this no changes occur
jsUser.age = 18
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Guys!!")
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello!!  ${this.name}`)
}
console.log(jsUser.greeting2());
