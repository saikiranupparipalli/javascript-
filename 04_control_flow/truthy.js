//NOTE: go to browser console and check:
/* false == 0 -->true
        false ==''-->true
        0 ==='' -->true  */

// truthy values: values that act like true in conditions ( {},[],'0','false',"",function(){},true )
// falsy values: values that act like false ( 0,-0,Bigint 0n, Nan, undefined, null, false)

/* conditons will assume the values based on the given values, e.g:
if we have given an empty array to the variable than condition inside control flow statement will
assume it as true. */
let array = [];
//----program to check array is empty is not--------
if (array.length === 0) {
  console.log("it is an empty array");
}

const myObj = {};
//----program to check object is empty is not--------
if (Object.keys(myObj).length === 0) {
  console.log("myObj is empty");
}

// practice:

const userName = {};

if (userName) {
  console.log("got username");
} else {
  console.log("enter username");
}
console.log(userName);

const nameOne = "saikiran";
if (nameOne === String(nameOne)) {
  console.log("it is a string");
} else if (nameOne === Number(nameOne)) {
  console.log("not a string");
}

nameOne === String(nameOne) ? console.log('it is a string') : console.log('not a string') //->ternary operator.

let url;
url = undefined ?? "https://www.google.com"
console.log(url) // nullish coalesing operator.



// falsy values:
const valueOne = 0;
console.log(Boolean(valueOne));


const valueTwo = -0;
console.log(Boolean(valueTwo));


const valueThree = 1234567890123456789012345678901234567890n;
console.log(valueThree);
// In JavaScript, all BigInt values are truthy except 0n.
console.log(Boolean(valueThree));


const valueFour = false;
console.log(Boolean(valueFour));


const valueFive = null;
console.log(Boolean(valueFive));


let valueSix;
console.log(Boolean(valueSix));


let valueSeven = Number("saikiran");
console.log(valueSeven);
console.log(Boolean(valueSeven));


let valueEight = "";
console.log(Boolean((valueEight = "")));
