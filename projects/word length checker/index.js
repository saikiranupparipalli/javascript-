const books = [
  { firstname: "sai", lastname: "kiran", age: 22 },
  { firstname: "krishna", lastname: "kumar", age: 12 },
  { firstname: "anand", lastname: "chakravarthy", age: 50 },
  { firstname: "shin", lastname: "chan", age: 12 },
];

const output = books.reduce((acc, books) => {
  if (acc[books.age]) {
    acc[books.age] = ++acc[books.age];
  } else {
    acc[books.age] = 1;
  }
  return acc;
}, {});
console.log(output);

const arr = [2, 2, 2, 2];

const outputSecond = arr.reduce((acc, arr) => {
  console.log(`acc: ${acc}, currentvalue: ${arr}`);
  return (acc = acc + arr);
}, 0);
// console.log(outputSecond)
