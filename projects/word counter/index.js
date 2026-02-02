const textarea = document.getElementById('text-input')
const char = document.getElementById('char-count')
const wordCount = document.getElementById('word-count')
const remainingCount = document.getElementById('remaining-count')
 

textarea.addEventListener('input', () => {

let userInput = textarea.value
// console.log(typeof userInput)
// console.log(userInput)
// console.log(userInput.length)

char.textContent =  userInput.length
if(textarea.value == ""){
    wordCount.textContent =  0
} else{
        userInput = userInput.trim()
        wordCount.textContent = userInput.split(/\s+/).length
}

remainingCount.textContent = 280 -  userInput.length
})
