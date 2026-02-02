const inputText = document.querySelector('input[type="text"]')

const button = document.getElementById('add-btn')
let pendingtask = document.getElementById('pending-count')
let todolist = document.getElementById('todo-list')

let storeTask = []
let clearbutton = document.createElement('button')

button
.addEventListener('click', () => {
    let userInput = inputText.value
    if(userInput == ''){
        alert('Please enter the task')
    } else {
        userInput = userInput.trim()
        storeTask.push({task: inputText.value})
        console.log(userInput)
        console.log(storeTask)
        inputText.value = ''
        
    }
    todolist.innerHTML = ''

    
    storeTask.forEach((item) =>{
        todolist.innerHTML += `<li class = "item"> <span>${item.task} </span> <button class ='btn'>✖</button </li>`
    })
    if(storeTask.task == ''){
        
    }
})