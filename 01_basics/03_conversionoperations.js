let number="sai";
let int=Number(number);
// console.log(int);
// console.log(typeof int); 

const num = parseInt("34")
console.log(num)
  // "33" => 33
  // "33abc" => NaN
  //  true => 1; false => 0
const numTwo = new Number("23an")
console.log(numTwo)

 let loggedIn=null;
let numberIstrue=Boolean(loggedIn);
console.log(numberIstrue);
// 1 => true; 0 => false
// "" => false
// "hitesh" => true
console.log(typeof numberIstrue);

 /* Conversion operations in JavaScript:
 check the conversion by changing number="sai" variable to different values 
 

 /* **********************OPERATIONS****************************** */
 
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);
 
 let gameCounter=100;
  gameCounter++;
  console.log(gameCounter); //-->postfix operator
  
  let gameCounter1=100;
  ++gameCounter1;
  console.log(gameCounter1); //-->prefix operator

  let now = null
  console.log(now)

let a = 1 + 5 + "abc"
console.log(a)
console.log(typeof a)

let b = "abc" + 1 + 5  
console.log(b)
console.log(typeof b)

let c =  1 + "5"  
console.log(c)
console.log(typeof c)

let d =  "1" + 5  
console.log(d)
console.log(typeof d)
// since, string is taken in all four (a,b,c,d) we get the typeof as string.
// string + num = string
// number + num = number


console.log(true)