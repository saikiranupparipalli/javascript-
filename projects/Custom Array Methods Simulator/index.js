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
  } else if (method.value === "some") {
    some(num)
  } else if (method.value === "every") {
    every(num)
  }
  // filter method --
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
  // map method --
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
  // reduce method --
  function reduce(num) {
    if (callback.value === "sum") {
      let iteratereduce = [];
       const final = num.reduce((acc, curr, index) => {
        const sum = acc + curr;
        log.innerHTML += `index:${index} -> acc:${acc} -> curr:${curr} -> ${acc} + ${curr} -> result:${sum} <br>`;
        iteratereduce.push(sum);
        return sum;
      }, 0);
      iteratereduce.forEach((num) => (result.innerHTML += `<li>reduce:${num}</li>`));
      result.innerHTML += `<br><strong>Final: ${final}</strong>`
    }
  }
  // find method --
  function find(num) {
    let found;
    for (let i = 0; i < num.length; i++){
      let curr = num[i]
      let decision = false
      if (callback.value === "greater than 3") {
        decision = curr > 3
      } else if (callback.value === "equal 5") {
        decision = curr === 5
      }
      log.innerHTML += `index:${i} -> value:${curr} -> ${decision ? "match found -> STOP" : "no match"} <br>`
      if (decision) {
        found = curr
        break;
      }
    }
    result.innerHTML = found !== undefined
        ? `<strong>find: ${found}</strong>`
        : `<strong>find: undefined</strong>`;
  }
  // some method --
  function some(num) {
    let matched = false
    for (let j = 0; j < num.length; j++){
      let some = num[j]
      let condition = false
      if (callback.value === "greater than 3") {
        condition = some > 3
      }
       log.innerHTML += `index:${j} -> value:${some} -> ${condition ? "kept ->stop" : "removed"} <br>`
      if (condition) {
        matched = true
        break;
      }
    }
     result.innerHTML =   `<strong>${matched}</strong>`
  }
  // every method --
  function every(num) {
    let everyResult = true
    for (let k = 0; k < num.length; k++){
      let curr = num[k]
      let condition = false
      if (callback.value === "even") {
        condition = curr % 2 === 0
      }
      if (!condition) {
        everyResult = false
        log.innerHTML += `index:${k} -> value:${curr} -> ${condition ? "pass" : "fail ->STOP"} <br>`
        break
      } else {
        everyResult = true
        log.innerHTML += `index:${k} -> value:${curr} -> ${condition ? "pass" : "fail -> STOP🎯"} <br>`
      }
    }
    result.innerHTML = `<strong>${everyResult}</strong>`
  }
  arrayinput.value = "";
  // method.value = "";
  callback.value = "";
});
