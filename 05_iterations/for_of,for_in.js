/* -----NOTE: FOR-OF LOOP DIRECTLY STORES THE TOTAL OBJECT/ARRAY AND EXECUTE.
------------- IN FOR-IN LOOP WE HAVE TO ASSIGN "VALUES" TO "KEYS". 
AS OF NOW WE USE FOR-IN LOOP FOR OBJECT AND FOR ARRAY WE USE FOR-OF LOOP*/

// -------------forof loop -------------------------------
let myArr = [2, 9, 48, 7];
//--> Understand for-of loop in a way that, assigning a new variable inside condition and making it hold
// the outside varibale/array/object.
for (const element of myArr) {
  // console.log(element)
}

//---------------------MAPS------------------------------------------------------------------
// --> Maps:The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Map objects are collections of key-value pairs.
//  A key in the Map may only occur once; it is unique in the Map's collection.
const map = new Map();
map.set("Name", "saikiran");
map.set("age", "22");
map.set("qualification", "btech");

console.log(map);

for (const [key, value] of map) {
  // console.log(key,':', value)
}
// NOTE: As of now lets keep it basic.We will learn in detail in coming files.
// ------------------------------------------------------------------------------------------

const myObject = {
  Name: "saikiran",
  age: "22",
  qualification: "btech",
};

//--------------forin loop-----------------------------------------
for (const key in myObject) {
  console.log(`${[key]}: ${myObject[key]}`);
  /* steps: 1.const key stores myobject in the format of key and value.
              2.In console line, myObject[key] → gets the value for that property. */
}
// -----------------------------------------------------------------

// practice:

const objOne = {
  username: "saikiran",
  password: 12345,
  mail: "sai@.in",
};

const keysofobjOne = Object.keys(objOne);
const valuesOfobjOne = Object.values(objOne);

for (const [key, value] of Object.entries(objOne)) {
  console.log(`${key}:${value}`);
}

const mapOne = new Map();
mapOne.set("in", "india");
mapOne.set("USA", "united states of americac");
mapOne.set("uk", "united kingdom");

for (const [key, value] of mapOne) {
  // forof loop iterates over strings, arrays, maps, sets. iterate means action.
  console.log(key, value);
}
for (const [key, value] of mapOne.entries()) {
  console.log(key, ":", value);
}

const arr = [2, 3, 1, 5];
for (const array of arr) {
  // Iteration is a process where JavaScript visits items one by one
  // and moves to the next item until all items are processed.

  console.log(array);
}

const objThree = {
  greeting: "how are you?",
  reply: "im fine, wbu",
};
// forin loop iterates over keys.
for (const key in objThree) {
  console.log(objThree[key]);
}

const mapTwo = {
  name: "saikiran",
  age: 20,
};
Object.keys(mapTwo);
console.log(mapTwo);

const mapThree = new Map();
mapThree.username = "saikiran";
mapThree.location = "karimnagar";
 
console.log(mapThree);


const arrOne = [2,5,5,6,7,8]

for (const key in arrOne) {
   console.log(arrOne[key]) 
}

const strNames = new String("sai", "kiran", "upparipalli")
// for (const key in strNames) {
   
//   console.log(strNames[key]);
  
  
// }


for (const element of strNames) {
  console.log(element)
}
 


const mapFour = new Map()
mapFour.set('sai', 'alpha')
mapFour.set('kiran', 'sigma')
console.log(mapFour);
for (const element of mapFour) {
    console.log(element)
}


 