//const myNumbers = [1,2,3,4,5,6,7,8]

//const newNem  = myNumbers.map((num)=> { return num+10})

// -----chaning----

// const newnum = myNumbers.
//     map((num) => num*10)
//     .map((num)=>num+1)
//     .filter( (num) => num>= 40)
//     console.log(newnum);


//---- reduce----
// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,cval){
//     console.log(`acc:${acc} and cval${cval}`)
//     return acc+cval
// },0)
// console.log(myTotal)

//using arrow function in it 
// const myTotal = myNums.reduce((acc,cval)=>acc+cval ,0)
// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "python course",
        price: 4000
    },
    {
        itemName: "c course",
        price: 6000
    }  
]

const PriceToPay = shoppingCart.reduce((acc, item)=>acc + item.price,0)
console.log(PriceToPay)