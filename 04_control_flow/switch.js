/* --> A **switch** is a control statement that selects and executes code blocks based on the value of an 
 expression by matching it against multiple cases. */
// Note: switch is a conditional statement and contol flow statement.

 const month = 13

 switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("june")
        break;
    case 7:
        console.log("july")
        break;
    case 8:
        console.log("Aug")
        break;
    case 9:
        console.log("Sep")
        break;
    case 10:
        console.log("Oct")
        break;
    case 11:
        console.log("Nov")
        break;
    case 12:
        console.log("Dec")
        break;
    default:
        console.log("We have only 12 months in a year 😅")
        break;
 }

//  practice:

let userloggedIn;

if(true){
    switch (userloggedIn) {
        case true:
            console.log('user just logged in.');
            break;
        case false:
            console.log('enter correct username');
            break;
            
        default:
            console.log('enter username:')
            break;
    }
}

// let allows declaration without initialization because reassignment is allowed later, whereas const requires initialization at declaration time because reassignment is not allowed.