/* As we already know about primitive datatypes in js:
    number,string,boolean,undefined,null,symbol,bigint.
*/
    let number=Symbol(123);
    let number2=Symbol(123);
    console.log(number===number2); // example for symbol datatype.In symbol datatype 'S' should be capital.

// Arrays,objects,functions are refernce (non-primitive) datatypes in js.

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution. 


let arr=["hey","how are","you?"]; 
console.log(arr);
// example for array datatype.

let objBox= {                           // syntax for obj datatype: obj={
    name:"saikiran",                                              //  name:"value",
    age:22 ,                                                      //  key:value,
}                                                                //   }                                                             
console.log(objBox);                   //in object, we can store multiple key-value pairs.


/*we will look about function datatype in coming files.
let myFun=function(a=10,b=20){
    return a+b;
    // console.log(myFun);
} */

// Stack and Heap memory in js:
 // stack memory stores symbol,number,boolean,undefines,null,big-int,string.

 let myFullname="upparipallisaikiran";
 let storeName=myFullname;

 let storName="saikiran";

 console.log(storName);  //-->when you give the same variables but different values to each one then,
 console.log(storeName); //-->stack memory always copy the original value and give as an output.

 /* As we look at the above example, myFullname variable value is copied to storeName variable.
 So when we change the value of storName variable it will not affect the value of storeName variable.*/


 //Heap memory stores arrays,objects,functions.
  /* The name of object is stored in stack memory and the info inside the object is stored in heap memory.
  When you change the value of object,it will effect the original obj value. */

  let myObjone ={
      name:"youtube",
      duration:13,
  }
    let myObjtwo=myObjone;
    myObjone.duration=33;

    console.log(myObjone);
    console.log(myObjtwo);
    /* As we see in the above example, when we change the value of myObjone object,it also affect the value of myObjtwo object.
    Because both the objects are pointing to the same location in heap memory. */


// practice code:

    const undefined = "undefined"; 
    const Null = "object";
    const boolean = "boolean"
    const num = "number"
    const string = "string"
    const object = "object"
    const objectCallfunction = "function"
    const objecthostandNotcallfun = "object"

// https://262.ecma-international.org/5.1/#sec-11.4.3 --> typeof check info

// console.table([undefined,Null,boolean,num,string,object,objectCallfunction,objecthostandNotcallfun])


const objOne = {
    age: 38,
    id:8989,
    function(num1,num2){
        console.log(num1 + num2)

    },
 
}
console.log(objOne)
console.log(objOne.function(3,4))
console.log(typeof objOne)
 