// functions and parameters

// function addtwoNo(no1 , no2){
//     console.log(no1 + no2)// here it just print not return anything thats why we use (return)
// }
// addtwoNo(3,3)

function addtwoNo(no1 , no2){
    let result = no1 + no2
    return result
    console.log(result)//--- this line never executes because line after return statement never executes
}
const result = addtwoNo(1 , 2)
//console.log("Result : ",result)

// we store anything in a variable by using return variable but not with the console.log()
// In line 13 result variable store the value of the function because we used return variable if we only used console.log(no1+no2)this only print this but not actually store in the variable

function userLoginMessage(username){
    return`${username} just logged in `

}
// console.log(userLoginMessage("smriti"))\
// when we not passing an argument - it returns undefined

