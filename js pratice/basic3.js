// types of datatypes
// primitive and non primitive

//(Call by value) primitive-- 7 types---->  String , Number , boollean, null,  undefined, symboll , Bigint

// Non primitive (Reference)-----> Array , objects, Functions



// Modern way of print any string 
const name =" smriti";
const age =18;
//console.log(` Hello my name is ${name.uppercase} and my age is ${age}`);

// another way of declaring a string
const gamename = new String ("smriti-Gaur")

console.log(gamename[0])
console.log(gamename.__proto__);// this give empty object 
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.indexOf("m"));

const newgame= gamename.substring (0,4);
console.log(newgame)

const ano = gamename.slice(-6,4)// we also give negative values
console.log(ano)
// replace-(to replace something in the variable ) ,
//  trim-(trim white spaces) ,
//  includes-(to find the word inside the variable )
// console.log(gamename.split('-'))// thsi will convert any string into an array on the basis of hyphone 
// for example this will give ['smriti','Gaur']

//(toLocaleString())// give value seperated by comma 

// The new keyword in JavaScript is used to create new objects.
//  When you use new with a constructor function, it creates a new instance of that object and initializes its properties and methods.

// Without the new keyword, you would simply be creating a string literal, which is a primitive value and doesn't have the same properties and methods as a String object.