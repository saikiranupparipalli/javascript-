/*----------------------NOTE: Object.method() → Static method (static method belong to the object itself),
----------------------------- Variable.method() → Instance method (instance method belong to the created variable)------------------fun which are mentioned in this file are called as method */

let todayDate = new Date() //--> date is an object,it has many functions inside of it.
console.log(todayDate)

console.log(todayDate.toLocaleString()) //--> toLocaleString will give you date,month,year ,time in hr,min,sec.

//console.log(todayDate.toLocaleDateString()) //--> toLocaleDateString will give you date,month,year.

console.log(todayDate.toString()) //-->converts the date into object .

//console.log(todayDate.getDate()) //--> getDate() fun is used to print todays date.

console.log(todayDate.getDay() + 1)

console.log(todayDate.getMonth() +1)

//console.log(todayDate.getMilliseconds()) //--> getMilliseconds() fun is used to print seconds.

//console.log(todayDate.getMinutes()) //--> getMinutes() fun is used to print minutes.

/*todayDate.toLocaleString('default',{
    weekday:'narrow'

}) --> we will study in detail in coming files. */

// console.log(Date.now())

console.log(new Date().toLocaleString())

// console.log(new Date().toJSON())
// console.log(new Date().toISOString())

const date = new Date(()=>{
    console.log(`Today it is: ${date}`)
});/* The date is not showing because Date does not execute callbacks; 
  passed a function that never runs. */
 
