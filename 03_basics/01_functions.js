function myFunction(){
   // console.log("hello world")
       
}
myFunction() //--> Basic working of function along with the syntax.

function addNumbers(num1,num2){  //-----------NOTE: 1. we will pass the parameters inside the function, parameters are the Variables written in the function definition
   // console.log(num1 + num2) 
}

addNumbers(3,9)  //-----------NOTE: 2. we will pass the actual arguments(values) inside the function. 
//------------------------> IN SHORT: Parameters = names.
//----------------------------------> Arguments = values.


function multiplication(num3,num4){
    let result =  num3 * num4 
    return result //--> return keyword will not print code after return result.
  //  console.log("hello world")
}

const result = multiplication(8,8)
//console.log(`Result is: ${result}`)

function signingUp(userName = "system"){ //--> we have given the default value so that compiler directly takes default userName even the arguments have not passed into function.
    if(!userName){ //--> "!" operator will directly return console.log , if the arguments have not passed inside the function.
        return console.log("enter correct userName!")
    } 
    return `${userName} successfully signed up.`
}

//console.log(signingUp( ))

function priceCart(...itemsValues){ //--> ... rest operator is used to print unlimited values.
    //NOTE: WORKING OF SPREAD & REST OPERATORS ARE SAME BUT NAMES ARE DIFFERENT.-------------------
    return itemsValues

}

console.log(priceCart(400,78,234))

//----------PASSING OBJECT INTO FUNCTION--------------------------

//-------------------METHOD-1--------------------------
let object = {
    username: "saikiran",
    password: 1290
    //--------- 1.You created an object with username and password.---
}

function passObj(valueHoldsObject){ //-> we are passing the variables inside parameter(valueHoldsObject) and the username of object is stored inside of parameter(valueHoldsObject).
    //--------The function receives the object.
    //--------valueHoldsObject now points to that object.
    //--------It prints username and password.
    (`${valueHoldsObject.username} is the name & the password is ${valueHoldsObject.password}`)
}

console.log(passObj(object))

//-----------------------------------------------------------------------------------

//--------METHOD-2-----------------------------
function passObj(valueHoldsObject){  
    return (`${valueHoldsObject.username} is the name & the password is ${valueHoldsObject.password}`)
}

console.log(passObj({
    username:"saikiran",
    password:123890

}))
  

//------------------PASSING OBJECT INTO FUNCTION ---------------------------------------


let array = [88,99,45,28] //--> 1.You created an array with 4 values.

function getArray(myarr){ //--2.The function receives the array as myarr.
    return myarr[3] //--> 3.myarr[3] means value at index 3.
}

console.log(getArray(array)) //-->4.array is passed to the function.
 
// practice:

// function callMe(){
// console.log('hey')
// console.log('how')
// console.log('are')
// console.log('you?')
// }
 
// console.log(callMe); //it is the reference of function.
// console.log(callMe()); //it is the execution of function.

// function addNumbers(num1,num2){
//     return num1 + num2
// }

// const resultOne = addNumbers(2,2)
// console.log(resultOne)


function myName(fullname){
    if(!fullname){
        console.log('enter your name.')
    } else{
        return `${fullname} is my fullname.`
    }
    
}
// !Not operator reverse the value truthiness.
console.log(myName())