//--------------------THIS KEYWORD-------------------
const obj = {
    username: "saikiran",
    mailId: "sai@gmail.com",
    valueHolder:function thisKeyword(){ 
        console.log(`${this.username} ,is the username`) //--> Here "keyword" points to an object(obj)
        console.log(this)


    }  
}
 
//obj.valueHolder()

//console.log(this)//--> Here "this" keyword is refering to global object. In node.js the global object refers to global,
// using globel term you can access any object/variable/function from any file.

//-->( In browser, window is the global object in which all objects/functions/variables are located ).

//----------------NOTE: "this" keyword will not work in functions in js.---------------------------------------
//example:
function code(){
    const username = "saikiran"
    //console.log(this.username)
}
code()
//-------------------------------------------------------------------------------------------------------------

const code1 = () => { //--> instead of typing function before the variable,we will directly put the brackets () and  arrow function => 
    const userName = "saikiran"
    //console.log(this.userName)
}
code1()
 
const details = (number,age) =>{
  //  return {number, age} //--> Here we have used object to get both values.
//--NOTE: we cant pass two variables using , operator.
//--- The comma operator always returns the last value, so number is skipped.
}
//console.log(details(1245689,33))



const userInfo = () =>{
    let firstname = "sai"
   // console.log(firstname)
}
userInfo()

const addnumbers =(num1,num2) => (num1 + num2) //-->1.implicit return operator: Implicit return means an arrow function returns a value automatically,
//without using the return keyword.
//2.Implicit return works only when there are no {} braces
console.log(addnumbers(9,4))


// practice:

const objOne = {
    name:"saikiran",
    message: function(){
        console.log(`welcome, ${this.name}`)
        return 'hey'
    },

  
}

console.log(objOne.message())
objOne.name = "upparipalli"
console.log(objOne.message());

// console.log(this);


function thisKeyword(){
    console.log(this);
// NOTE: Since no object calls the normal function, this defaults to the global object (in Node.js non-strict mode).
}
 thisKeyword();


(() => {console.log(this)})() //since, it is like only writing "console.log('hey')" inside one new index js, it is treated as written on top level. just like that arrow function is get treated.
// top of the nodejs environment, module exports are present, so modules export is empty before importing any methods or object or functions.




// (() => console.log('this')) (); //iife 
// (() => console.log('js')) ()