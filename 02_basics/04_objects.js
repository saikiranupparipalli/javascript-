//----------------------------------NOTE: VARIABLES❌,property✅---------------------------
//-->SINGLETON OBJECT: const obj = { } , NON-SINGLETON OBJECT: const obj = new Object()

//--> You will get the empty object for portFolio,portFolio2 variables..
const portFolio = {}
const portFolio2 = new Object()

portFolio.name = "sai"
portFolio.id = "88jui"
//console.log(portFolio)

 let userDetails = {
    login:{
        fullname:{
            firstName:"sai",
            lastName:"kiran",
        }
    }
 }

 //console.log(userDetails)
 //console.log(userDetails.login.fullname) //--> using object and dot we can access the nested objects & elements.

 let assignMethod =  { 1:'a',2:'b'}
 let assignMethod2 = {3:'c',4:'d'}
 console.log(Object.assign({},assignMethod,assignMethod2)) //--> Object.assign() method is used to combine objects
 //---------NOTE: ALWAYS ADD AN EMPTY OBJECT ALONG WITH THE VARIABLE OBJECTS SO THAT OBJECT.ASSIGN() GETS A CLARITY TO ADD ALL OBJECTS IN SINGLE OBJECT.--------------------

 let assignMethod3 = {...assignMethod,...assignMethod2} //--> we use spread operator to combine/add one or more objects in single object.
//console.log(assignMethod3)

// console.log(Object.keys(userDetails)) //--> Object.keys() method is used to access the sub objects/values.

// console.log(Object.values(userDetails)) //--> object.values() method is used to access the values of an object.

console.log(Object.keys(portFolio)) 
console.log(Object.values(portFolio))

console.log(Object.entries(portFolio)) //--> Object.entries() method is used to represent each variable and its value in a seperate array.

//console.log(portFolio.hasOwnProperty("name")) //--> hasOwnProperty() is used to check wheather variable is present or not.
//----------NOTE: OBJECT WILL NOT HAVE includes() FUNCTION.
//----------------OBJECT WILL HAVE ONLY hasOwnProperty() FUNCTION.------------------------------------------



//----------------------DE-STRUCTURING IN OBJECTS--------------------------------------------


const userInfo = {
    username:"saikiran",
    email:"sai@gmail.com",
    loginPassword: 5569
}
//---------------NOTE: IN DESTRUCTURING,takes email out of the object & Stores it in a separate variable.
/*                     👉 Here, email is the variable.
----------------------- -> JavaScript looks for the email property in userInfo
----------------------- - > It creates a variable named email
------------------------ - > The value "sai@gmail.com" is stored in that variable. */
const {email,loginPassword:password} = userInfo //--> we can also change variable name(e.g:loginpassword to password).
console.log(email,password)  
// console.log(userInfo)



 
// pracitce:

let  objOne = { 
    name: "saikiran",
    age: 38,
    mail: "yahoo.mail"
}
console.log(objOne);
console.log(typeof objOne);

const objOnee = JSON.stringify(objOne)
console.log(objOnee);
console.log(typeof objOnee);




const arr =  new Array(2,3,5,6,8)
console.log(arr);
console.log(typeof arr);
// internally the arrays are objects that is reason why typeof is shown as object.
const arrObj = JSON.stringify(arr)
// json.stringify converts 
console.log(arrObj);
console.log(typeof arrObj);

 


 


