/* As of now we have already seen about string datatype in js in previous files.
 In this file we will look more about strings in detail. */

  let myFirstname="saikiran"
  let myLastname="upparipalli"
  console.log(myFirstname.toUpperCase() + " " + myLastname) // this is way of concatinating of two srrings.

  console.log(`my name is ${myFirstname} and my inital starts with ${myLastname}`) //--> using backticks and string interpolation method to concatinate two strings.

  const userName = new String('hello world') // It is the way of declaring variables in string.
  console.log(userName.toUpperCase()) 
  console.log(userName.charAt(9))
  console.log(userName[6])  //  the property to check the key value of the char.

  console.log(userName.substring(1,7)) // The substring() method is used to extract part of a string and return it as a new string,it will not print last value.

  
  console.log(userName.slice(-6,-1)) // The slice() method is used to extract a part of a string and return it as a new string,it does not change the original string.
// In slice method the startnum>=endnumber. 
// slicing never track from backwards.


let cartoonName = "      shichan           "
console.log(cartoonName)
console.log(cartoonName.trim()) // trim() method is used to remove the extra space.


const url = "https://www.google.com"
console.log(url.replace('google.com','www.brave.com')); // replace() method is used to replace the input value entered by user.

console.log(url.includes('google')) // includes() method is used to check the keywords available in strings.

console.log(userName.split(" "))  // split() method is used to divide the strings into parts/arrays based on spaces etc.. 



