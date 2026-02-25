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
  }

  function filter(num) {
    if (callback.value === "greater than 3") {
      num
        .filter((num) => num > 3)
        .forEach((num, index) => {
          result.innerHTML += `<li>filter:${num} </li>`
          log.innerHTML += `index:${index}->num:${num}-> ${num}> 3 ? "->kept" : "->remove" <br>`
        });
      // log.innerHTML = `array:${num}, method:${method.value}, callbacklogic:${callback.value}`
    }
  }
  function map(num) {
    if (callback.value === "multiply by 2") {
      num
        .map((num) => num * 2)
        .forEach((num) => (result.innerHTML += `<li>map:${num}</li>`));
    }
  }
  function reduce(num) {
    if (callback.value === "sum") {
      const reduce = num.reduce((acc, curr) => acc + curr, 0);
      result.innerHTML = `<li>reduce:${reduce}</li>`;
    }
  }

  arrayinput.value = "";
  method.value = "";
  callback.value = "";
});
