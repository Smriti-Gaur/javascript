// let score = 11
// do{
//     //console.log(`Score is ${score }`)
//     score++

// } while(score <=10)


// // for off loops 

// ["","",""]= string 
// [{},{},{}]= objects
const arr = [1,2,3,4,5]
for (const num of arr ){
   // console.log(num)
}

// const greetings = "hello world"
// for(const great of greetings){
//     //console.log(`Each char is ${great}`)
// }

// maps

// const map = new Map();
// map.set('In', "India");
// map.set('En', "England");
// map.set('Fr', "France");
//console.log(map);   

// for (const [key,value] of map){
    //console.log(key,":-",value);
// }

const myObject= {
    'movie':'KGF',
    'movie':'Panipath'
}

for (const [key,value]of myObject){
    //console.log(key,':-',value);
}

for (const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming= ["js","c++","c","python"]

for (const key in programming){
   // console.log(programming[key]);
}

coding.forEach((item)=>{
    //console.log(item);
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)//-- here we pass a function
// coding.forEach()