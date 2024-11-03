function calcprice(...num1){     //---- [...]is a rest operator as well as spread operator depends upon its use 
    return num1                          // here it is use to accept multiple arguments

}
//console.log(calcprice(2,3,4,5,))

const user = {
    name: "apple",
    price:200
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.name} and price is ${anyobj.price}`)

}
//handleObj(user) // 1st method 
// handleObj({  // second method
//     name: "apple",
//     price: 200
// })

const array =[100,200,300,400]
function returnvalue (getarray){
    return getarray[1]

}
// console.log(returnvalue (array));
console.log(returnvalue ([200,300,400,500]));


/*const addtwo = function(num){
    return num + 2
}
addtwo(3)* ----- we also write the functions like this .*/