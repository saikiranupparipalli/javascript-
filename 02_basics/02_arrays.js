/*----------------------NOTE: Object.method() → Static method (static method belong to the object itself),
----------------------------- Variable.method() → Instance method (instance method belong to the created variable)------------------fun which are mentioned in this file are called as method */
//-->In this file we will learn more array methods.

let disneyCartoon = ["doraemon","litlle krishna","chotabheem"]
let hungamaCartoon = ["shichan","ninjahatoori","motupathlu"]

// console.log(disneyCartoon.concat(hungamaCartoon)) //---> concat() fun is used to add both elements of array in single array.

// console.log([...disneyCartoon,...hungamaCartoon]) //--> spread() fun is used to add both elements of array in single array.

let myArr = [1,2,3,[4,5],6,7,[8,9],0,10,[11,22],88,34]
//console.log(myArr.flat(Infinity)) //--> flat() used to represent all array elements in single array.NOTE: WE HAVE NOT ADDED "DEPTH" WHICH IS THE PART OF FLAT()FUN.WE WILL STUDY LATER ABOUT IT..


let arrayNew = ["saikiran"]
// console.log(arrayNew.isArray("upparipalli")) //-->  GIVES ERROR
// console.log(Array.isArray(arrayNew)) //-->  isArray() method will works with static method.

// console.log(Array.from(arrayNew)) //--> from() method converts string into an arrray.

let score1 = 900
let score2 = 1000
let score3 = 1200

console.log(Array.of(score1,score2,score3))  //--> Array.of() method converts the elements into an array.

//const scores = [score1,score2,score3]
//console.log(scores.join())   

// practice:

const arrOne = new Array("upparipalli")
const arrTwo = new Array("saikiran")

console.log([...arrOne,...arrTwo])
console.log(...arrOne,...arrTwo)
// there two consoles will give o/p in different types.

const arrThree = new Array(3,82,[8,9,90,[9,8,7]])
console.log(arrThree.flat(Infinity))

const arrFour = new Array("saikiran")
/* arrFour is already an array, so Array.from(arrFour) 
creates a shallow copy of it. */
console.log(Array.isArray(arrFour))
console.log(Array.from(arrFour))


console.log(Array.from("saikiran"))
/* A string is an iterable, because its characters can be
accessed one by one in sequence.since,"saikiran" is a string, so Array.from("saikiran") 
converts it into individual characters. */



