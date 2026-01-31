const userDescription = document.querySelector('input[type="text"]')
const userAmount = document.querySelector('input[type="number"]')

const form = document.querySelector('#transaction-form')
const income = document.querySelector('#income')
const expense = document.querySelector('#expense')
const balance = document.querySelector('#balance')

let userdetails = [] 

//code written by chatgpt:
form
.addEventListener('submit', (event) => {
    event.preventDefault()
    
    if(!userDescription.value.trim()){
        alert('enter a description')
        return
    }
    if(!userAmount.value){
        alert('enter your amount')
        return
    }

    userdetails.push({
        text: userDescription.value.trim(),
        amount: Number(userAmount.value)
        
    })
    
    let totalbal = userdetails.reduce((sum, item) => {
        return sum + item.amount
    }, 0)

    const incomeTotal = userdetails
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => (sum + item.amount), 0)

     

    const expenseTotal = userdetails
    .filter((item) => item.amount < 0)
    .reduce((sum, item) => (sum + item.amount), 0)

    balance.textContent = totalbal
    income.textContent = incomeTotal
    expense.textContent = Math.abs(expenseTotal)

    userDescription.value = ''
    userAmount.value = ''
 
})

// code written by own:

// if(Number(userAmount.value) > 0){
    //     const addAmount = userdetails.reduce((sum, currvalue) => {
    //    return sum + currvalue.amount
    // },0)
    // balance.textContent = addAmount
    // income.textContent = userAmount.value
    
    // userDescription.value = ''
    // userAmount.value = ''
    // return
    // }
    
    

    // if(Number(userAmount.value) < 0){
    //      const removeAmount = userdetails.reduce((sumOne, currvalueTwo) => {
    //    return sumOne + currvalueTwo.amount
    // },0)
    //     expense.textContent = removeAmount
    //     balance.textContent = removeAmount

    // }
    

   
 



//     if(userDescription.value.trim() !== ''){
//          let valueStr = userDescription.value.trim()
//          if(userAmount.value !== ''){
//             userdetails.push({
//                 text: userDescription.value.trim()
                
//             })
//              userDescription.value = ''
              
//           }     
//     }else{
//         return alert('Please enter the description')
//     } 
    
//     if(userAmount.value !== ''){
//          let valueNum = userAmount.value
//         if(userDescription !== ''){
//              userdetails.push({
                
//                 amount: Number(userAmount.value)

//              })
//              userAmount.value = ''
//              income.textContent = valueNum
              
//         }
//     }else{
//         alert('Please enter the amount')
//     }
//     // console.log(userdetails)

//     const addUserDetails =  userdetails.reduce( (sum, userAmount) => {
//     return sum + userAmount.amount
// }, 0)
//     console.log(addUserDetails)

