// -------------------while Loop--------------------
// example 1:
let value = 15;
let i = 1;

while (i <= value) {
  // console.log(`value of i is: ${i}`)
  i = i + 1;
}

// example 2:
let myArray = [0, 8, 3, 1, 2];
let index = 0;

while (index < myArray.length) {
  // console.log(`myArray values are ${myArray[index]}`)
  index = index + 1;
}

// -------------do while Loop------------------------
// example 1:
let marksGained = 80;
do {
  // console.log(`you have secured a third rank ${marksGained}`)
  marksGained++;
} while (marksGained <= 90);

// example 2:
let arr = [90, 76, 343];
let j = 0;
do {
  console.log(`j is: ${arr[j]}`);
  j++;
} while (j < arr.length);

// --------------

// practice:

let indexOne = 1;

while (indexOne <= 10) {
  console.log(`index is: ${indexOne}`);
  indexOne = indexOne + 2;
}

// Getting the console output of objectOne using a while loop.
const objOne = {
  address: "hyd",
  education: "computer science",
  passOut: 2024,
};

let lengthOfobjOne = Object.keys(objOne);
// console.log(lengthOfobjOne)

let arrCount = 0;

while (arrCount < lengthOfobjOne.length) {
  console.log(objOne[lengthOfobjOne[arrCount]]);
// lengthOfobjOne stores only keys; those keys are used to fetch values from objOne, where the values actually live.
  arrCount = arrCount + 1;
}


// Getting the console output of objectTwo using a do while loop.
const objTwo = {
  location: "venkatsai apartments",
  pincode: 505001,
  city: "karimnagar",
};

let lengthOfobjTwo = Object.keys(objTwo);
let arrCountTwo = 0;


do {
  console.log(objTwo[lengthOfobjTwo[arrCountTwo]]);
  arrCountTwo = arrCountTwo + 1;
} while (arrCountTwo < lengthOfobjTwo.length);
