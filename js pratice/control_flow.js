// if 

const isloggedin = true;
const isdebitcard = true ;
const loggedinbygoogle = false;
const loggedinbyfacebook = true;

if (isloggedin && isdebitcard){
    console.log("Allowed");

}else if(loggedinbygoogle || loggedinbyfacebook) {
    console.log("user logged in");
}
else{
    console.log("Exit");

}