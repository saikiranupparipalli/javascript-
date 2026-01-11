/*----------------------NOTE: Object.method() → Static method (static method belong to the object itself),
----------------------------- Variable.method() → Instance method (instance method belong to the created variable)------------------fun which are mentioned in this file are called as method */
const myArray = [4,8,9,2,3]
//console.log(myArray)

//const matrix = new Array(6,8,4,5,1) //--> new Array() syntax is usefull in creating an empty array.
//console.log(matrix)
  
myArray.push(1) //--> push() method in array is used in adding new elements in an array.

//console.log(myArray)

//myArray.pop() //--> pop() method is used in deleting an elements.

//console.log(myArray)

myArray.unshift(1) //--> unshift() method used in adding new elements from index 0,this will change the index sequence of every elements in an array.
//console.log(myArray)

myArray.shift(1)
//console.log(myArray) //--> shift() method is usefull in deletion of elements which is index 0.

//console.log(myArray.includes(1)) //--> includes() fun checks wheather element is present or not.

//console.log(myArray.indexOf(3)) //--> indexOf() fun shows the index number of the given element.


let myArrTwo =  myArray.join() //--> join() fun used to bind an array and also converts an array to string.
console.log(myArrTwo)

//console.log(typeof myArrTwo)

console.log("A ",myArray)

let mynewArr = myArray.slice(0,3) //--> slice() fun extracts elements without changing the original array.
console.log(mynewArr)
console.log("B",myArray)
// NOTE:splice() gives a new array of removed elements,where as slice() gives a new array of copied elements (nothing is removed).
let mynewArr2 = myArray.splice(0,3) //--> splice() fun extracts elements by changing orignal array.
console.log("C",myArray)

//console.log(mynewArr)
//console.log(mynewArr2)
 

// ** imp topic: shallow copies and deep copies in array **

// practice: 

// const arrNew = new Array(9,3,8,8)
// console.log(arrNew)

const arrNew = new Array(9,3,8,8)
console.log(arrNew.indexOf(9))