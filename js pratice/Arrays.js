const myArray = [1,2,3,4,5]

//js array copies- operations create shallow copies rather than deep copies

// console.log(myArray[0])

const myArray2 = new Array(1,2,3,4,5)// second method to declare a array 
// console.log(myArray2[0])


// Array methods

// myArray.push(6)
// myArray.pop()
// myArray.ushift(2)  // add element in starting but it is not good practice because we need to shift all values of all element
// myArray.shift() // remove first element
// console.log(myArray.includes(9)) it gives boolean value if 9 is present in an array or not 
// console.log(myArray.indexOf(9))

// const newArr = myArray.join() // adds all elements of an array into the string seperates by the specified seperator 
// console.log(myArray)
// console.log(  newArr);
// console.log( typeof newArr);

// slice,splice

console.log("A", myArray);
const myar = myArray.slice(1,3)

console.log(myar)
console.log("B", myArray);

const mynr = myArray.splice(1,3)// it manipulate the orignal array 
console.log("C", myArray);
console.log(mynr)
