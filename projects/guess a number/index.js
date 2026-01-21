let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum)
const guessNum = document.querySelector('#guessField');
const submit = document.querySelector('#subt');

const prevGuessSlot = document.querySelector('.guesses');
const remainingGuessSlot = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const h4 = document.createElement('h4')
const startOver = document.querySelector('.resultParas')

let prevGuess = [];
let remainingGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const userInput = parseInt(guessNum.value);
    // console.log(userInput);
    checkInstr(userInput);
  });
}

function checkInstr(userInput) {
  if (isNaN(userInput)) {
    alert('enter a valid number');
  } else if (userInput < 1) {
    alert('enter a number greater than 1.');
  } else if (userInput > 100) {
    alert('enter a number less than 100.');
  } else {
    prevGuess.push(userInput);
    if (remainingGuess == 10) {
      clearValues(userInput);
      displayMessage(`Game Over, last random number was ${randomNum}`);
      endGame()
    } else {
      clearValues(userInput);
      checkInstrTwo(userInput);
    }
  }
}

function checkInstrTwo(userInput) {
  if (userInput == randomNum) {
    displayMessage('you guessed it correct.');
    endGame()
  } else if (userInput < randomNum) {
    displayMessage('the number is too low.');
  } else if (userInput > randomNum) {
    displayMessage('the number is too high');
  }
}

function clearValues(userInput) {
  guessNum.value = '';
  prevGuessSlot.innerHTML += `${userInput} `;
  remainingGuess++;
  remainingGuessSlot.innerHTML = `${11 - remainingGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame(){
  guessNum.value = ''
  guessNum.setAttribute('disabled','')
  h4.className = 'h4'
  h4.innerHTML = '<h6 id = heading>start new Game </h6>'
  startOver.appendChild(h4)
  playGame = false
  newGame()
}

function newGame(){
  const button = document.querySelector('#heading')
  .addEventListener('click', ()=>{
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    remainingGuess = 1;
    prevGuessSlot.innerHTML = ``;
    remainingGuessSlot.innerHTML = `${11 - remainingGuess}`;
    guessNum.removeAttribute('disabled')
    startOver.removeChild(h4)
    playGame = true
  })
}