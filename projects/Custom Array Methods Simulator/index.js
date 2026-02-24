const arrayinput = document.getElementById("arrayInput");
const btn = document.getElementById("runBtn");
const method = document.getElementById("methodSelect");

btn.addEventListener("click", () => {
  let input = arrayinput.value.split(",")
  const eachNum = input.map((num) => num.trim()).filter((num) => num !== "").map((num) => Number(num))
 
});


// 
// const num = eachNum.reduce((acc, curr) => {
//  return  acc = acc + curr;
  
// }, 0);
// console.log(num);