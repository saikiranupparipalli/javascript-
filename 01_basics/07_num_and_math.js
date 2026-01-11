/*----------------------NOTE: Object.method() → Static method (static method belong to the object itself),
----------------------------- Variable.method() → Instance method (instance method belong to the created variable)------------------fun which are mentioned in this file are called as method */

//-------------------------------NUMBERS-------------------------------------------
const myNum = new Number(89) //--> new is a keyword.
console.log(myNum);

// console.log(myNum.toString()) //--> tostring() converts the number to obj.
// console.log(typeof myNum)

//console.log(myNum.toFixed(2)) //--> toFixed() is the function to add floating numbers.

let number = 1894838494
// console.log(number.toLocaleString('en-IN')) //--> toLocalString() function is used to represent the numbers in hundreds,thousands etc....
    //--> (en-IN) is used to display the numbers in IND format.

let number2 = 18.78
// console.log(number2.toPrecision(3)) //--> toPrecision() function is used to get the precise value of the given input.



//--------------------------------------MATH library--------------------------------------------------------

// math called as library in conceptual wise since it provides the functionality and object as technical wise since it has methods,properties in it.

// console.log(Math.round(445.8)) //--> round() fun gives the round value of the input.

//console.log(Math.abs(-89))  //--> abs() fun converts the negative value into positive value of the input.

//console.log(Math.max(89,23,876,20))  //--> max() fun gives the highest value from given input.

//console.log(Math.min(0,234,87,4,6))  //--> min() fun gives the lowest value from given input.

//console.log(Math.ceil(8.1))  //--> ceil() fun gives the round value (i:e-9) from given input even it is 8.1,8.2 or 8.9.

//console.log(Math.floor(8.9)) //--> floor() fun gives the round value (i:e-8) from given input even it is 8.9,8.8 or 8.1.


//console.log(Math.random()) //--> random() is fun that generates a number between 0 and 1.

//console.log(Math.floor(Math.random() * 10) + 1) //-->  we add +1 to the random number so, that generation of numbers starts from 1 but not from 0.


const min = 15
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1)+ min)) // random is generated between 0 & 1 but never generated 1.
// generated value is multiplied with 16 (max-min value + 1).
// 1 is added to include the max value.
//since we want to start generation of values starts from 15(min value).so,we add generated value with min value.


 
  