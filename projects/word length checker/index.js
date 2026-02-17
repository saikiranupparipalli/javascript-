const books = [
  { firstname: "sai", lastname: "kiran", age: 22 },
  { firstname: "krishna", lastname: "kumar", age: 12 },
  { firstname: "anand", lastname: "chakravarthy", age: 50 },
  { firstname: "shin", lastname: "chan", age: 12 },
];
const map = books.reduce((acc, curr) => {
   if(curr.age > 12){
      acc = acc[curr.firstname]
      return acc
   }
   }, {})
console.log(map)

const reduce = books.reduce((acc, curr) => {
   if(curr.age > 12){
      acc.push(curr.firstname)
      
   }  
   return acc
},[])
console.log(reduce)






const output = books.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
// console.log(output);

const arr = [2, 2, 2, 2];
const outputSecond = arr.reduce((acc, arr) => {
//   console.log(`acc: ${acc}, currentvalue: ${arr}`);
  return (acc = acc + arr);
}, 0);
// console.log(outputSecond)
