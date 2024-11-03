// Array specific loops

// for off
// ["","",""]= string 
// [{},{},{}]= objects
// const arr = [1,2,3,4,5]
// for (const num of arr ){
//    // console.log(num)
// }

// ------MAPS-----
//A Map is a collection of key-value pairs in JavaScript. 
// It's similar to an object, but with a few key differences:
// Keys can be any data type , Ordered , Iterability ** No duplicate value 

// const map = new Map();
// map.set('In', "India");
// map.set('En', "England");
// map.set('Fr', "France");
//console.log(map);   // this will print a whole array

// for (const [key,value] of map){
    //console.log(key,":-",value);    // this will print both key and value 
// }


// const myObject= {
//     'Js':'javascript',
//     'Py':'Python'
// }

// for (const key in myObject){
//     console.log(key);  // this will only print the keys 
// }

// for (const key in myObject){
//     console.log(` ${key} shortcut is for  ${myObject[key]}`)
// }

// Using forin loop for arrays 

// const programming= ["js","c++","c","python"]

// for (const key in programming){
//    //console.log(programming[key]);
// }

// for each loop

//const coding = ['js','py','c','c++']

// coding.forEach(function (item){
//     console.log(item);
// })

// Write this by using arrow function 
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)//-- here we pass a function


// coding.forEach((item , index,arr )=> {
//     console.log(item,index, arr)
// })

// const myCoding = [
// {
//     language : "Python",
//     shortcut: "py"
// },
// {
//     language : "Javascript",
//     shortcut: "Js"
// },
// {
//     language : "c",
//     shortcut: "c"
// }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.language)
// })

// forEach loop never return a value 
// const coding = ['js','py','c','c++']

// const values= coding.forEach((item)=>{
//     return item
// })
// console.log(values); //--- this will return undefined


//------FILTER------
//const Nums = [1,2,3,4,5,6,7,8]
// const newNum =  Nums.filter((num)=>num>4)

// console.log(newNum)

//const newNum =  Nums.filter((num)=>{
    //return num>4})// here is the need to write return keyword becaue we open a scope by using curly brackets
//console.log(newNum)

// we can do above work by using forEach loop but by using if else

const newNum=[]
myNum.forEach((item)=>{
    if (num>4){
        newNum.push(num)
    }
})
console.log(newNum);


