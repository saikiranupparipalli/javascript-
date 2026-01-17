// foreach loop:**`forEach`** is an array loop that **runs a function once for each element** in the array.

// Method 1:
let myArray = [4, 9, 0, 33, 54, 89, 120, 808];

myArray.forEach((value, index) => {
  // forEach is an built in array method that runs a function once
  //  for each element in the array
  //   console.log((value,index));
  // we can also print index , arr of an array
});

//  Method 2:
let myArray2 = [77, 77, 77, 77];

function name(value2) {
  // console.log(value2)
}
myArray2.forEach(name);

/* Steps for forEach loop:
1. We use the built-in forEach() array method.
2. forEach() runs a function once for each element in the array.
3. The function receives the current array element as a parameter.
4. The function can be:
   - an anonymous/arrow function, or
   - a named function.
*/

// ---IMPORTANT ------------------------
const searchObject = [
  {
    userName: "saikiran",
    password: 1234,
  },
  {
    userName: "upparipalli",
    password: 8899,
  },
  {
    userName: "karthik",
    password: 8873,
  },
  {
    userName: "jayanth",
    password: 6732,
  },
];

searchObject.forEach((thing) => {
  console.log(thing.userName);
});

//-------------finding the object values using filter method------------------------------
const findObject = searchObject.filter((name) => {
  return name.userName === "karthik" && name.password === 8873;
});
console.log(findObject);
// --------------------------------------


// practice:

const arr = ["sai", "kiran"];

arr.forEach((item) => {
  // console.log(item)
});

const objOne = {
  name: "saikiran",
  age: 22,
};
const objOnelen = Object.keys(objOne);

objOnelen.forEach((item, index) => {
  console.log(item, index, objOne[item]);
});


 
 const results = [
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Afet",
        last: "Kavaklıoğlu",
      },
      location: {
        street: {
          number: 8803,
          name: "Talak Göktepe Cd",
        },
        city: "Aksaray",
        state: "Elazığ",
        country: "Turkey",
        postcode: 13101,
        coordinates: {
          latitude: "69.0818",
          longitude: "44.2916",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "afet.kavaklioglu@example.com",
      login: {
        uuid: "170ee4d4-00a9-4183-b2e4-0ce42da9b85c",
        username: "crazybird801",
        password: "tanner",
        salt: "aMMgGmEk",
        md5: "b47250b92f5dff02357849fe81e462fe",
        sha1: "60d9ad8e27738c111d1537a8441a43fb98c3db88",
        sha256:
          "847f7886eada91f1a5598235973109809bdfd01a81e2cf4f261cbc79a4fa4c3f",
      },
      dob: {
        date: "1994-05-13T13:54:08.680Z",
        age: 31,
      },
      registered: {
        date: "2007-09-02T16:04:53.467Z",
        age: 18,
      },
      phone: "(865)-753-7312",
      cell: "(770)-652-7575",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
      },
      nat: "TR",
      info: {
    seed: "a60111e081b296dd",
    results: 1,
    page: 1,
    version: "1.4",
  }
    }
    
  ]
//   let module = false
 
  results.forEach( (module)=> {
    console.log(module.picture)
  })
// console.log(results)
  results.forEach( (module)=> {
    
    if(module.user){
        console.log(module.info)
    } else{
        console.log('Not found.!')
    }
  })




// const arrOne = [1,2,3,4,5]

// arrOne.filter( (item) => {
//     if(item <= 3){
//            console.log(item)
//     }
 
// })

const arrTwo = [6,7,8,9,10]
let newarr = []

arrTwo.forEach( (item) => {
    if(item >= 7){
        newarr.push(item)
         
    }
   
})
console.log(newarr)

/* reason for undefined console:
filter doesn’t log undefined because it removes elements that fail the condition,
 while forEach always executes and logs whatever the value is.
 */

