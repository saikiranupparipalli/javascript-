
//  Note: object defined using syntax are know as literals, objects defined using new keyword are know as constructors.
//  singleton: is an object that is created only once and reused everywhere.
//   e.g: const obj1 = { name: "Sai" }; // singleton

// object defined using litrals: 
let mySymbol = Symbol("sai")
 const myObj = {
    name:"saikiran",
    email:"saikiran@gmail.com",
    contact:6300490290,
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
    console.log(`hey im,${this.name}`) /*--> since,greeting is property which is inside of object (i.e:myObj) and it holds the function so,
     "this"keyword is used to directly points to an element (i.e:name). */
}

console.log(myObj.greeting())


let objectOne = function(){
    console.log(`hey im,${myObj.name}`) //--> objectOne does not located inside of any object so, no keyword(i.e:"this") is needed to point an element.
}

console.log(objectOne())


//----------------------NOTE: DONT WORRY ABOUT WORD "UNDEFINED" WHICH IS COMING IN O/P,WILL STUDY ABOUT IT COMING FILES..--------------------
 


