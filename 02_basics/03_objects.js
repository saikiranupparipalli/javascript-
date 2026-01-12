
//  Note: object defined using syntax are know as literals, objects defined using new keyword are know as constructors.
//  singleton: is an object that is created only once and reused everywhere.
//   e.g: const obj1 = { name: "Sai" }; // singleton

// object defined using litrals: 
let mySymbol = Symbol("sai")
 const myObj = {
    name:"saikiran",
    email:"saikiran@gmail.com",
    contact:6390290,
    location:"TG",
    [mySymbol]: "sai"
/*-NOTE: 1.whenever you want to access Symbol inside of an obj,you have to mention the Symbol inside [] (eg:[mySymbol]).Even though o/p is same but datatype will change in background.
    2.The variables inside of an object consider as a string in background.(eg: variable name is consider as "name").
 */
}

console.log(myObj)
console.log(myObj.email)
console.log(myObj["email"]) //--> working example of NOTE 2.
 

console.log(typeof(myObj.mySymbol)) //--> Symbol is consider as string in background,to change the datatype read NOTE 1.

myObj.contact = 7732045650 //-->method used to change info of variable.

//Object.freeze(myObj) // --> Object.freeze() method stops modifying object.

myObj.location = "AP"

//----------------------------FUNCTIONS IN OBJECTS ----------------------------------

myObj.greeting = function(){ //--> greeting is property which is inside of object (i.e:myObj).
    return `hey im,${this.name}` /*--> since,greeting is property which is inside of object (i.e:myObj) and it holds the function so,
     "this"keyword is used to directly points to an element (i.e:name). */
}

console.log(myObj.greeting())


let objectOne = function(){
    return objOnee = `hey im,${myObj.name}` //--> objectOne does not located inside of any object so, no keyword(i.e:"this") is needed to point an element.
}

console.log(objectOne())


//-----------about undefined read objFive below👇🏿👇🏿👇🏿--------------------
 
// practice:

// const obj = {
//     age: 30,
//     email: "sai@mail.com"
// }

// console.log(obj.email)

// const sym =  Symbol("sai")

// const objTwo = {
//     [sym]: "kiran",
//     age: 33,
//     email: "sai23@mail.com"
// }

// console.log(objTwo[sym]);
// console.log(typeof objTwo[sym]);
// console.log(sym);


// const objThree = {
//     sym: "sai",
//     sym: "kiran",
//     age: 33,
//     email: "sai23@mail.com"
// }
// // Since, new key overwrites the old one so, only second value is stored and printed.
// console.log(objThree);


// let sym = Symbol()
// const objFour = {
//     [sym]: "sai",
//     sym: "kiran",
//     age: 33,
//     email: "sai23@mail.com"
// }
 
// console.log(objFour);


const objFive = {
    greeting: (num1,num2) =>{
        // return console.log('hey');
        return num1 + num2;
    },
    sym: "kiran",
    age: 33,
    email: "sai23@mail.com"
}

console.log(objFive.greeting)
console.log(objFive.greeting(2,3));
/* the difference b/w two console's is, objFive.greeting prints the function itself (function reference) 
and the function is not executed.
objFive.greeting() Calls (executes) the function, first prints hey (from inside the function) 
and then prints undefined because the function doesn’t return anything.
*/

