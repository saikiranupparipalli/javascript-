const buttons = document.querySelector(".buttons");

const innerText = document.querySelector('input[type="text"]');
const operator = document.querySelector(".operator");
// console.log(innerText)
// const display = document.querySelector(".display");

let storeNumberOne = null;
let storeNumberTwo = null;
let selectedOperator = null;

buttons.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;
  const buttonPressed = event.target.innerText;

  // console.log(buttonPressed)
  displayinput(buttonPressed);
});

function displayinput(buttonPressed) {
  let userInput = innerText.value;
  // storeNumberOne += innerText.value
  // console.log(storeNumberOne)

  switch (buttonPressed) {
    case "AC":
      innerText.value = "";
      storeNumberOne = "";
      storeNumberTwo = "";
      selectedOperator = "";
      break;
    case "DEL":
      innerText.value = innerText.value.slice(0, -1);
      // storeNumberOne = storeNumberOne.slice(0, -1);
      // console.log(storeNumberOne)
      break;

    case "+":
      storeNumberOne = Number(innerText.value);
      console.log(storeNumberOne);
      selectedOperator = "+";
      // console.log(storeNumberOne)
      innerText.value = "";
      break;
    case "×":
      storeNumberOne = Number(innerText.value);
      console.log(storeNumberOne);
      selectedOperator = "×";
      // console.log(storeNumberOne)
      innerText.value = "";
      break;
    case "−":
      storeNumberOne = Number(innerText.value);
      console.log(storeNumberOne);
      selectedOperator = "−";
      // console.log(storeNumberOne)
      innerText.value = "";
      break;
    case "÷":
      storeNumberOne = Number(innerText.value);
      console.log(storeNumberOne);
      selectedOperator = "÷";
      // console.log(storeNumberOne)
      innerText.value = "";
      break;
    case "%":
      //  userInput = Number(innerText.value) / 100
      storeNumberOne = Number(innerText.value);
      // console.log(storeNumberOne)
      selectedOperator = "%";

      innerText.value = "";
      break;

    case "=":
      storeNumberTwo = Number(innerText.value);
      let result;

      if (selectedOperator === "+") {
        result = storeNumberOne + storeNumberTwo;
      } else if (selectedOperator === "×") {
        result = storeNumberOne * storeNumberTwo;
        // console.log(result)
      } else if (selectedOperator === "−") {
        result = storeNumberOne - storeNumberTwo;
      } else if (selectedOperator === "÷") {
        result = storeNumberOne / storeNumberTwo;
      } else if (selectedOperator === "%") {
        result = storeNumberOne % storeNumberTwo;
        console.log(storeNumberOne, storeNumberTwo, selectedOperator);
      }

      // calculate(userInput, storeNumberOne);
      innerText.value = result;
      storeNumberOne = null;
      storeNumberTwo = null;
      selectedOperator = null;

      //  innerText.value +=  calculateAddition(userInput, storeNumberOne);
      //  innerText.value +=  calculateMultiplication(userInput, storeNumberOne);

      // innerText.value +=  calculateAddition(userInput, storeNumberOne);
      // innerText.value += calculateMultiplication(userInput, storeNumberOne);

      break;
    default:
      innerText.value += `${buttonPressed}`;
      break;
  }

  //  console.log('the value is: ',userInput)
}

// function calculateAddition(userInput, storeNumberOne) {
//       return Number(userInput) + Number(storeNumberOne);
//   // console.log(num);

//   //  innerText.replaceWith(num)
//   //  num += `${innerText.value}`
// }
