const password = document.querySelector('input[type="password"]');

const button = document.querySelector(".check-btn");

let instruction = document.querySelector(".instruction");
let eye = document.querySelector(".eye");
 

let weak = document.querySelector(".weak");
let medium = document.querySelector(".medium");
let strong = document.querySelector(".strong");


let labels = document.querySelector('.labels')

let labelweak = labels.querySelector('span:nth-child(1)')
let labelmedium = labels.querySelector('span:nth-child(2)')
let labelstrong = labels.querySelector('span:nth-child(3)')
// console.log(removelabelstrong)

// weak.style.display = 'none'
// medium.style.display = 'none'
// strong.style.display = 'none'

let passStore = [];

eye.addEventListener('click', ()=>{
  let pass = password.type == 'password'
  if(pass){
    password.type = 'text'
    eye.textContent = '🙈'
  } else{
    password.type = 'password'
    eye.textContent = '👁️'
  }
  // password.type = pass ? 'text':'password'
  // eye.textContent = pass ? '🙈' : '👁️'
})

button.addEventListener("click", () => {
  let userInput = password.value;
  // console.log(userInput)
  let convertPass = Array.from(userInput);
  // passStore.push(convertPass);
  // console.log(passStore)
  // let hasletters = /[a-zA-Z]/.test(password.value);
  // let hasnums = /\d/.test(password.value);
  /* 
    regex (regular expression): is a pattern used to search, match, or validate text.
    regex is the whole concept and techniques used to valid text are called as patterns.   
    /^[a-zA-Z]+$/ → matches strings made of ONLY letters (from start to end)
    /[a-zA-Z]/  → checks if the string contains AT LEAST ONE letter
    /^\d.+$/  → matches strings that START with a digit and have more characters
    /\d/  → checks if the string contains AT LEAST ONE digit
  */
  checkPass(userInput, convertPass);
  // checkletter(convertPass)
});

function checkPass(userInput, convertPass) {
  let hasletters = /[a-zA-Z]/.test(password.value);
  let hasnums = /\d/.test(password.value);
  if (userInput.length < 8) {
    displaymessage("password should contains atleast 8 chars including letters and numbers.");
    cleaninputbox();
  } else if (!hasletters) {
    displaymessage("password must includes letters");
  } else if (!hasnums) {
    displaymessage("password must includes atleast one number");
  } else {
    displaymessage('password is set')
    checkletter(userInput);
    // displaylabels()

    // cleaninputbox();
    if(userInput.length >= 9){
      passStore.push(convertPass);
      cleaninputbox();
      console.log(passStore)
    }
    
    // checkletter(userInput);
}

}
function displaymessage(message){
  instruction.textContent = message
  
}
function displayweak(){
  labelweak.textContent = 'weak'
  labelmedium.textContent = ''
  labelstrong.textContent = ''
}
function displaymedium(){
  labelweak.textContent = ''
  labelmedium.textContent = 'medium'
  labelstrong.textContent = ''
}
function displaystrong(){
  labelweak.textContent = ''
  labelmedium.textContent = ''
  labelstrong.textContent = 'strong'
}



function cleaninputbox() {
  password.value = "";
   
}
// function cleanstrengthbar(){
//   weak.style.display = 'block'
//   medium.style.display = 'block'
//   strong.style.display = 'block'

// }

function checkletter(userInput){
  if(userInput.length == 8){
    weak.style.display = 'block'
     medium.style.display = 'none'
     strong.style.display = 'none'
     displayweak()

    //  clearlabel()
    // labels.removeChild(removelabelmedium)
    // labels.removeChild(removelabelstrong)
   

  } else if(userInput.length <= 11 ){
    weak.style.display = 'none'
    medium.style.display = 'block'
    strong.style.display = 'none'
    displaymedium()

    // clearlabel()
    // displaylabels('medium')
    // labels.removeChild(removelabelweak)
    // labels.removeChild(removelabelstrong)
    

  }else if(userInput.length >= 12){
    weak.style.display = 'none'
    medium.style.display = 'none'
    strong.style.display = 'block'
    displaystrong()

    // clearlabel()
    // displaylabels('strong')
    // labels.removeChild(removelabelweak)
    // labels.removeChild(removelabelmedium)
    

  }
}
















// let storeInput = [];

// let password = true;

// if (password) {
//   let userInput = inputbox.value;
//   clicksubmit(inputbox.value);
//   //   checkinput(userInput);
// }

// function clicksubmit(userInput) {
//   checkbtn.addEventListener("click", () => {
//     storeInput.push(userInput);
//   });
// }

// function checkinput(userInput) {
//   if (userInput.length <= 8) {
//     alert("enter a valid password");
//   }
// }

// checkbtn.addEventListener('click', ()=>{
//     // const userInput = inputbox.value
//     if(inputbox.value <= 8){
//     alert('enter a valid password')
// } else{
//     const displaypass = storeInput.push(inputbox)
//     console.log(displaypass)
// }

// })
