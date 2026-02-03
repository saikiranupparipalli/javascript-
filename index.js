// setInterval(()=>{
//     console.log("hey")
// },2000)

// const arr = [2,3,4,4,0]
// console.log(arr);
// console.log(typeof arr);

//  console.log('hey');
 

//  const num = parseInt('mk')
//  console.log(num)

// function add(a,b){
//    console.log(a + b) 
// }
// add(8,8)

// const name = 'sai kiran from cs undergraduate'
// console.log(name.split(" "))
// console.log(name[2])


// const myString = "Hello World. How are you doing?";
// const splits = myString.split(" ", 3);

// console.log(splits); // [ "Hello", "World.", "How" ]

// const split = 'cs under graduate'
// console.log(split.split(" "))

const inputText = document.querySelector('input[type="text"]');
const button = document.getElementById('add-btn');
const pendingtask = document.getElementById('pending-count');
const todolist = document.getElementById('todo-list');

let storeTask = [];

// ADD TASK
button.addEventListener('click', () => {
  const userInput = inputText.value.trim();

  if (userInput === '') {
    alert('Please enter the task');
    return;
  }

  storeTask.push({ task: userInput });
  inputText.value = '';

  renderTasks();
});

// DELETE TASK (EVENT DELEGATION)
todolist.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
    const index = event.target.dataset.index;
    storeTask.splice(index, 1);
    renderTasks();
  }
});

// RENDER TASKS
function renderTasks() {
  todolist.innerHTML = '';

  storeTask.forEach((item, index) => {
    todolist.innerHTML += `
      <li class="item">
        <span>${item.task}</span>
        <button class="btn" data-index="${index}">✖</button>
      </li>
    `;
  });

  pendingtask.textContent = storeTask.length;
}
