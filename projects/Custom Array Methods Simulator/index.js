const arrayinput = document.getElementById("arrayInput");
const btn = document.getElementById("runBtn");
const method = document.getElementById("methodSelect");
const callback = document.getElementById("callbackInput");
const result = document.getElementById("result");
const log = document.getElementById("log");
btn.addEventListener("click", () => {
  let input = arrayinput.value.split(",");
  let num = input
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => Number(num));
  let callbackInput = callback.value;
  result.innerHTML = "";
  log.innerHTML = "";
  if (method.value === "filter") {
    filter(num);
  } else if (method.value === "map") {
    map(num);
  } else if (method.value === "reduce") {
    reduce(num);
  } else if (method.value === "find") {
    find(num)
  }
  
  function filter(num) {
    if (callback.value === "greater than 3") {
      const iterate = [];
      num.forEach((num, index) => {
        const decision = num > 3;
        log.innerHTML += `index:${index} -> value:${num} -> ${num} > 3 = ${num} ${decision ? "->kept" : "->removed"} <br>`;
        if (decision) iterate.push(num);
      });
      iterate.forEach((num) => (result.innerHTML += `<li>filter:${num}</li>`));
    }
  }
  function map(num) {
    if (callback.value === "multiply by 2") {
      const iterateMap = [];

      num.forEach((num, index) => {
        const decision = num * 2;
        log.innerHTML += `index:${index} -> value:${num} -> ${num} * 2 = ${decision} <br>`;
        iterateMap.push(decision);
      });
      iterateMap.forEach((num) => (result.innerHTML += `<li>${num}</li>`));
    }
  }
  function reduce(num) {
    if (callback.value === "sum") {
      let iteratereduce = [];
       const final = num.reduce((acc, curr, index) => {
        const sum = acc + curr;
        log.innerHTML += `index:${index} -> acc:${acc} -> curr:${curr} -> ${acc}+${curr} -> result:${sum} <br>`;
        iteratereduce.push(sum);
        return sum;
      }, 0);
      iteratereduce.forEach((num) => (result.innerHTML += `<li>reduce:${num}</li>`));
      result.innerHTML += `<br><strong>Final: ${final}</strong>`
    }
  }

  function find(num) {
    
  }
  
  arrayinput.value = "";
  // method.value = "";
  callback.value = "";
});
