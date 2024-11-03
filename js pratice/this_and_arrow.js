// THIS and arrow func in js 

// this function refer the current context

const user ={
    username : "smriti",
    id: "abcd",

    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`)
    }

}
// user.welcomemessage()// thsi give smriti 
// user.username="siya"
// user.welcomemessage()// this give siya 
//  console.log(this) //--- gives empty string because of node js but in browser it gives window in browser...


//************** global object in the browser is WINDOW!!!! */
// we can't use this inside the functions only use in the objects

// ARROW FUNCTION

const a = () => {
    let username  = "Rashi "
    console.log(this)
}
// a()

// const addtwo= (num1,num2)=>{
//     return num1+ num2
// }

// const addtwo = (num1,num2)=>num1+num2
const addtwo = (num1,num2)=>(num1+num2)// if we use curly braces - we need to write return keyword otherwise if we use parenthesis we need not use return keyward
// we must wrap any object in paranthesis

// console.log(addtwo(3,4))