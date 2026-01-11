/*
> A PROMISE in JavaScript is an object that represents the future result of an asynchronous operation.

> PROMISE STATES: promise can be in only one of these states:

            1.Pending – operation is still running

            2.Fulfilled – operation completed successfully

            3.Rejected – operation failed

> *** Once fulfilled or rejected → state is final (cannot change).***

> resolve is a function that marks the promise as successful and passes the result value to the next .then().

> .then() function is used to handle the successful result of a Promise.

> .catch() function is used to handle errors (rejections) in Promises.
  ** Runs only when a promise is rejected
  ** Receives the value passed to reject()

> .finally() function is used to execute cleanup code after a promise is settled, regardless of success or failure.


NOTE: .then(), .catch(), and .finally() are functions, and since they belong to a Promise object, we call them methods.
*/
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log('hey')
        resolve()
    },1000)
})
.then(()=>{
    // console.log('job done')
})
 
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'saikiran',email:'saikiran@zoho.com'})
    },1000)
})
// we pass parameter inside .then function to receive the object located inside resolve function.
promiseOne
.then((user)=>{
    // console.log(user)
})


const promiseTwo = new Promise((resolve,reject)=>{
    let error = false
    if(!error){
        resolve({username:'saikiran',password:'23'})
    }else{
        reject('ERROR.!')
    }
})

promiseTwo
.then((user)=>{
    // console.log(user)
    return user.username // return keyword passes the data to next step.
    // console.log(user.username)
})
.then((username)=>{
    // console.log(username)
})
.catch((error)=>{
    // console.log(error)
})
.finally(()=>{
    // console.log('promise has been executed')

})


const promiseThree = new Promise((resolve,reject)=>{
    let error = true
    if(!error){
        resolve({username:'upparipalli',password:'902'})
    }else{
        reject('ERROR.!')
    }
})

// async/await is a syntax built on Promises that allows writing asynchronous JavaScript code in a synchronous style.

async function promiseHandling(){
    try {
        const responce = await promiseThree
        console.log(responce)

    } catch (error) {
        // console.log('something went wrong.!')
    }
}

promiseHandling()
/* async: is a keyword used before a function to make it return a Promise automatically.
await: is a keyword used inside an async function to wait for a Promise to finish and get its result.
** async/await is just a cleaner way to write Promise logic without .then() and .catch().** 
*/

async function randomUrl(){
    try {
        const url = await fetch('https://randomuser.me/api/')
        const data = await url.json()
        console.log(data)
        
    } catch (error) {
        console.log('e-',error)
    }
    
    
}
randomUrl()

fetch('https://api.github.com/users/saikiran-upparipalli')
// fetch is a browser (or runtime) API provided by the environment(e.g: node.js or browser).
.then((code)=>{
    const data = code.json()
    // console.log(data)
    return data
})
.then((data)=>{
    console.log(data)
})
.catch((error) => console.log(error))