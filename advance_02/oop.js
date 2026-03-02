const obj = {}; //- object literal refers to creating an object.

// instances: this, new keywords.
const text = {
  loginName: "saikiran",
  lockerId: 22,

  logDetails: function details() {
    console.log(
      `welcome, ${this.loginName}. your lockerId is: ${this.lockerId}.`,
    );
  },
};

// text.logDetails();

// NOTE: Generally,In Node.js, every JS file is wrapped inside a function. When the file runs, that wrapper function is executed automatically.
// - reason why, this always shows empty object.


// constructor function: function used with the new keyword to create and initialize multiple objects.
function info(username, age, rollnum) {
  this.username = username;
  this.age = age;
  this.rollnum = rollnum;
  // return this;
}
function info(username, age, rollnum) {
  this.username = username;
  this.age = age;
  this.rollnum = rollnum;
  this.greeting = function details() {
    return this.username
  }
}

const keyword = new info("sai", 22, 45);
console.log(typeof keyword)
// const keywordTwo = new info("kiran", 32, 532)
// console.log(keywordTwo.greeting());
