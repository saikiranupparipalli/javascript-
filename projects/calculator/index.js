// console.log('hey');
const buttons = document.querySelector(".buttons");

const innerText = document.querySelector('input[type="text"]')
const operator = document.querySelector('.operator')
// console.log(innerText)
// const display = document.querySelector(".display");

let storeNumberOne = ''
// const storeNumberTwo = []

buttons.addEventListener('click',(event) =>{
  const buttonPressed = event.target.innerText
  // console.log(buttonPressed)
  displayinput(buttonPressed)
})

function displayinput(buttonPressed){
//  let userInput = buttonPressed 
 let userInput =  innerText.value += `${buttonPressed}`
 
 let numStored = storeNumberOne + userInput
 console.log(numStored)
 
  
 
  
  

switch (buttonPressed) {
  case 'AC':
    innerText.value = ''
    break;
  case 'DEL':
 
    break;
  
  default:
    break;
}

//  console.log('the value is: ',userInput)

   
}

/* Click Number → Store → Display
Click Operator → Store → Clear
Click Number → Store
Click "=" → Calculate → Display result */
