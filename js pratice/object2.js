//Object.create // object cunstructer
// singleton object--- object which are declared with the help of object cunstructer

//const iUser = new Object() //--- it is an singleton object
const iUser={}  //--- it is an non singleton object 

iUser.id = "123abc"
iUser.name = "jimmy"
iUser.place = "paris"
// console.log(iUser)

const rUser = {
    name: "shanky",
    age:21,
    isLoggedIn: true,
    fullname:{
        username:{
            FirstName:"shank",
            LastName:"mittal",
        }
    }
}

//console.log(rUser.fullname.username.LastName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3)

const user = [
    {
        id :1,
        email: "s@@iti.com"
    },
    {
        id :2,
        email: "s2bh.com"
    }
]
//user[1].email
// console.log(iUser)
// console.log(Object.keys(iUser))
// console.log(Object.values(iUser))
// console.log(Object.entries(iUser))

//console.log(iUser.hasOwnProperty('isLoggedIn'))

const course = {
    cname: "js",
    cprice : 200,
    cInstructor : "riddhi "
}

//course.cInstructor

// const {cInstructor} = course
const {cInstructor: instructor} = course //---- if we want to give them a nick name we can write like this.
console.log(instructor)