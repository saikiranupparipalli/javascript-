// "=" operator is used to assign value to the variable.(assignment operator)
// "==" operator is used to check the values.(e.g:2==2) (Equality operator)
// "===" operator is used to check the values along with their datatypes.(e.g:2==="2")(Strict equality operator)
// "!=" operator is used to compare the values.(e.g:2!==2->false) (Inequality operator)
//"!==" operator is used to compare the values along with their datatypes.(e.g:2!=="2"->true)(Strict inequality operator)
// "&&,||" are logical operators.

const result = 93;

if (result >= 90) {
  //  console.log("you have passed in first class.")
  const value = 1000;
  //-> NOTE: DONT USE VAR INSIDE OF CONTROL FLOW , IT WILL BECOME GLOBAL SCOPE.
  //  console.log(`result is added to your annual marks ${value}`)
} else {
  console.log("Better luck for the next time");
}
// console.log(`result is added to your annual marks ${value}`) //--> this line throws an error.

if (true) console.log("hello world"); //--> it is an implicit scope.

const userloggedIn = true;
const email = true; //--> && , || operators for checking one or more conditions at a time.
const password = false;
const guestUser = true;

if (email && password) {
  console.log("you have successfully logged in");
} else if (guestUser) {
  console.log("you have succesfully logged in");
} else if (email || password) {
  console.log("enter the correct password");
} else {
  console.log("login first");
}

//---------IMP: Nullish coalescing operator (Null coalescing operator)-------------------------------
//--> The nullish coalescing operator (??) is used to provide a default value
// when a variable is null or undefined.

let username = null;
let displayname = username ?? undefined ?? "upparipalli";
console.log(displayname);

let numOne = 123;
console.log(typeof numOne);
const changeMe = numOne ?? number ?? "im a number";
console.log(changeMe);
// NOTE: Nullish operator will only look after null or undefined.it doesnt care about what input is given.

//--------IMP:ternary operator-------------------
// Syntax: condition ? true : false

let age = 22;
age > 20 ? console.log("Adult") : console.log("teenager");

let num = Number(12);
isNaN(num) ? console.log("give a number") : console.log("it is number");



// practice:

let a = 200;
let b = 100;
let c = 300;

const bind = [a, b, c];
const afterBind = bind.toString();
console.log(afterBind);
console.log(typeof afterBind);

let balance = 2000
if(balance > 500) console.log(this);



let loggedIn = true
let balanceOne = 2000
let debitCard = true

if(loggedIn && debitCard && 2>2){
  console.log(`your account balance: ${balanceOne}`);
} else{
  console.log("sorry, we are facing server inconvience.");
  
}


let url;
url = undefined ?? "https://www.google.com"
console.log(url) // nullish coalesing operator.