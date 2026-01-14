//-->NORMAL LOOP
for (let i = 0; i <= 5; i++) {
  //console.log(i)
}

//EXAMPLE FOR WORKING OF LOOPS INSIDE OF LOOPS
for (let i = 0; i <= 5; i++) {
  //    console.log(`OUTER LOOP VALUE ${i}`)
  for (let j = 0; j <= 5; j++) {
    //        console.log(`INNER LOOP VALUE ${j} and inner loop ${i} `)
  }
}

//--> EXAMPLE FOR MULTIPLICATION TABLE
for (let i = 1; i <= 10; i++) {
  // console.log(`OUTER LOOP VALUE ${i}`)
  for (let j = 1; j <= 10; j++) {
    // console.log(`INNER LOOP VALUE ${j}`);
    // console.log(i +  '*' + j + '=' + i*j);
  }
}

const myArray = [0, 4, 85, 2];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
//   console.log(element);
}

// -------------BREAK AND CONTINUE KEYWORD-------------------

for (let index = 1; index <= 10; index++) {
  if (index == 6) {
    // console.log("i found value 6");
    break; //--> break keyword
  }
//   console.log(`the value of index is: ${index}`);
}
for (let index = 1; index <= 10; index++) {
  if (index == 6) {
    // console.log("i found value 6");
    continue; //--> continue keyword
  }
//   console.log(`the value of index is: ${index}`);
}





// practice:

// for (let index = 0; index < 5; index++) {
//     const element = index
//     console.log(element)

// }

for (let index = 0; index <= 5; index++) {
  // console.log(`outer loop: ${index}`);

  for (let j = 0; j <= 5; j++) {
    // console.log(   `inner loop: ${j}`)
  }
}

for (let index = 1; index <= 10; index++) {
  //    console.log(`Multiplication table: ${index}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`${index} * ${j} = ${index * j}`)
  }
}


for (let index = 1; index <= 10; index++) {
  
    if(index > 6){
       console.log(`you have more limits.🤞🏻`)
        break; 
    }else{
        console.log(`you have reached limits.👎🏻`)
         break;
    }
    // break exits only the current loop or switch block, and execution continues with the next statement after that block.
}


for (let index = 1; index <= 5; index++) {
    
    if(index == 3){
        console.log(index)
        console.log(`mission accomplished`)
        continue;
    }

    console.log(index)
}