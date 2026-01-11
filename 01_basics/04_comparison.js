
// Always compare same datatype values to avoid unexpected results 
// === operator checks for both value and type equality 
   let num1=44;
   let num2="44";
    console.log(num1===num2); // false
/* == operator checks only value equality 
     Dont use == operator to avoid issues.
   */

// strict equality operator > ===
// equality operator > ==

console.log(null < 0)
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// the reason behind null >= 0 is, equality check (==) and comparisions
// (<>=<=) work differently.
//  comparisons convert null to number, treat it as 0