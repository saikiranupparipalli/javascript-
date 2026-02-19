const userInput = document.getElementById("user-input");
const btn = document.getElementById("check-btn");
let ul = document.getElementById("output-list");
const result = document.getElementsByClassName("result");

btn.addEventListener("click", () => {
  const input = userInput.value
   const splitWords = input.split(" ")
   console.log(splitWords)
  const filterSplitWords = splitWords.filter((word) => {
    return word !== ""
  })
  ul.innerHTML = ""

  filterSplitWords.forEach(element => {
    const li = document.createElement("li")
    li.textContent = ` ${element} => ${element.length}`
    ul.appendChild(li)
  });
// filterSplitWords.map((word) => {
//     const li = document.createElement("li")
//     li.textContent = ` ${word} => ${word.length}`
//     ul.appendChild(li)
//    })
  
});





// reduce, map, filter practice:
// const books = [
//   { firstname: "sai", lastname: "kiran", age: 22 },
//   { firstname: "krishna", lastname: "kumar", age: 12 },
//   { firstname: "anand", lastname: "chakravarthy", age: 50 },
//   { firstname: "shin", lastname: "chan", age: 12 },
// ];
// const map = books.reduce((acc, curr) => {
//    if(curr.age > 12){
//       acc = acc[curr.firstname]
//       return acc
//    }
//    }, {})
// console.log(map)

// const reduce = books.reduce((acc, curr) => {
//    if(curr.age > 12){
//       acc.push(curr.firstname)

//    }
//    return acc
// },[])
// console.log(reduce)

// const output = books.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// // console.log(output);

// const arr = [2, 2, 2, 2];
// const outputSecond = arr.reduce((acc, arr) => {
// //   console.log(`acc: ${acc}, currentvalue: ${arr}`);
//   return (acc = acc + arr);
// }, 0);
// console.log(outputSecond)
