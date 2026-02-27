// const arr = [2, 2, 2, 2, 2]
// arr.reduce((acc, crr) => {
//   const sum = acc + crr
//   console.log(sum)
//   return sum
// }, 0)

// const num = [2, 2, 2, 2, 2];
// const numTwo = [1, 3, 4, 5, 6, 2];
// num.forEach((num, index) => {
//   const value = numTwo[index];
//   console.log(
//     `index:${index} -> valueOne:${num} -> valueTwo:${value}  ${num === value ? "->kept" : "->removed"}`,
//   );
// });
// num.forEach((index, num) => {
//     // for(let acc = 0; acc <= num;){
//     //    let sum = acc + num
//     //    return sum
//     //  }
//   })
// console.log(num)
// console.log(`acc:${acc} -> curr:${num} -> ${acc}+${num} -> ${sum}`)``

let input = [2, 4, 5, 6, 5, 5];
for (let i = 0; i < input.length; i++){
  let value = input[i]
  // console.log(`index:${i} -> value:${value} -> ${value > 3 ? "-> kept" : "-> removed"}`)
}

let arr = [2, 3, 8, 9, 0, 1]
for (let j = 0; j < arr.length; j++){
  console.log(`index:${j} -> element:${arr[j]}`)
  
  
}