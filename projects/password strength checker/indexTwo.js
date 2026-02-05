const password = document.querySelector('input[type="password"]');

const button = document.querySelector(".check-btn");

const instruction = document.querySelector(".instruction");
const eye = document.querySelector(".eye");

const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");

const labels = document.querySelector(".labels");

const labelweak = labels.querySelector("span:nth-child(1)");
const labelmedium = labels.querySelector("span:nth-child(2)");
const labelstrong = labels.querySelector("span:nth-child(3)");

let passStore = [];

eye.addEventListener("click", () => {
  let pass = password.type == "password";
  if (pass) {
    password.type = "text";
    eye.textContent = "🙈";
  } else {
    password.type = "password";
    eye.textContent = "👁️";
  }
  // password.type = pass ? 'text':'password'
  // eye.textContent = pass ? '🙈' : '👁️'
});

password.addEventListener("input", () => {
  let userInput = password.value;
  checkPass(userInput)
 
});

function checkPass(userInput) {
  const hasletters = /[a-zA-Z]/.test(password.value);
  const hasnums = /\d/.test(password.value);
  checkletter(userInput)
  if (!hasletters) {
    displaymessage("password must includes letters");
  } else if (!hasnums) {
    displaymessage("password must includes atleast one number");
  } else {
    displaymessage("password is set");
    }
  }

button.addEventListener('click', () => {
     const userInput = password.value;
     const convertPass = Array.from(userInput)

     const hasletters = /[a-zA-Z]/.test(password.value);
     const hasnums = /\d/.test(password.value);
    
     if(userInput.length >= 9 && hasletters && hasnums){
        passStore.push(convertPass)
        cleaninputbox()
        console.log(passStore)
     }else{
        displaymessage('password is too weak')
     }
})

function displaymessage(message) {
  instruction.textContent = message;
}

function cleaninputbox() {
  password.value = "";
}

function displayweak() {
  labelweak.textContent = "weak";
  labelmedium.textContent = "";
  labelstrong.textContent = "";
}
function displaymedium() {
  labelweak.textContent = "";
  labelmedium.textContent = "medium";
  labelstrong.textContent = "";
}
function displaystrong() {
  labelweak.textContent = "";
  labelmedium.textContent = "";
  labelstrong.textContent = "strong";
}

function checkletter(userInput) {
  if (userInput.length < 8) {
    weak.style.display = "block";
    medium.style.display = "none";
    strong.style.display = "none";
    displayweak();
  } else if (userInput.length <= 11) {
    weak.style.display = "none";
    medium.style.display = "block";
    strong.style.display = "none";
    displaymedium();
  } else if (userInput.length >= 12) {
    weak.style.display = "none";
    medium.style.display = "none";
    strong.style.display = "block";
    displaystrong();
  }
}
