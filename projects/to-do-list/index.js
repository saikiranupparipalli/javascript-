// const inputText = document.querySelector('input[type="text"]')

// const button = document.getElementById('add-btn')
// let pendingtask = document.getElementById('pending-count')
// let todolist = document.getElementById('todo-list')

// let storeTask = []
// let clearbutton = document.createElement('button')

// button
// .addEventListener('click', () => {
//     let userInput = inputText.value.trim()
//     if(userInput == ''){
//         alert('Please enter the task')
//     } else {
//         storeTask.push({task: userInput})
//         // console.log(userInput)
//         console.log(storeTask)
//         inputText.value = ''
//         renderTask()
//     }

// })

// todolist.addEventListener('click', (event) => {
//     if(event.target.classList.contains("btn")){
//         const index = event.target.dataset.index
//         storeTask.splice(index, 1)
//         renderTask()
//     }
// })

// function renderTask(){
//     todolist.innerHTML = ''
    
//     storeTask.forEach((item, index) => {
//         todolist.innerHTML +=  `<li class = item> <span>${item.task} </span>
//          <button class = "btn" data-index = "${index}">✖</button> </li> `
//     })
//     pendingtask.textContent = storeTask.length
// }


// scratch-out the completed task.

const inputText = document.querySelector('input[type="text"]')

const button = document.getElementById('add-btn')
let pendingtask = document.getElementById('pending-count')
let todolist = document.getElementById('todo-list')

let storeTask = []
let clearbutton = document.createElement('button')

button
.addEventListener('click', () => {
    let userInput = inputText.value.trim()
    if(userInput == ''){
        alert('Please enter the task')
    } else {
        storeTask.push({task: userInput, completed: false})
        // console.log(userInput)
        console.log(storeTask)
        inputText.value = ''
        renderTask()
    }

})

todolist.addEventListener('click', (event) => {
    if(event.target.classList.contains("btn")){
        const index = event.target.dataset.index
        storeTask[index].completed = !storeTask[index].completed
        renderTask()
    }
})

function renderTask(){
    todolist.innerHTML = ''
    
    storeTask.forEach((item, index) => {
        const completedClass = item.completed ? 'completed' : '';
        todolist.innerHTML +=  `<li class = "item ${completedClass}"> <span>${item.task} </span>
         <button class = "btn" data-index = "${index}">✖</button> </li> `
    })
    pendingtask.textContent = storeTask.length
}
