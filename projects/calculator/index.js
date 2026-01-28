// console.log('hey');
const buttons = document.querySelector(".buttons");

const display = document.querySelector(".display");

let numPress = [];

// let placeHold = document.createElement('p')

buttons.addEventListener("click", (event) => {
  let store = numPress.push(event.target);
  console.log("numpress val:", store);
});

/* Click Number → Store → Display
Click Operator → Store → Clear
Click Number → Store
Click "=" → Calculate → Display result */
