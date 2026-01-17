
const myArr = [9,3,4,2,34,56]
// filter: filter() is an array method that creates a new array containing only 
// the elements that pass a condition.
const findNumber = myArr.filter((num) =>{
     return num > 3
     
})
//  console.log(findNumber)


//  filtering the numbers using foreach loop-->
const nums = [8,3,4,52,9,]
const emptyNum = []

nums.forEach((element) => {
    if(element > 4){
        emptyNum.push(element)
    }
});
// console.log(emptyNum)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let findBooks = books.filter((book) => (book.publish >= 1980  && book.genre === 'Non-Fiction'))
console.log(findBooks)

findBooks = books.filter((book)=>book.title >= 'Book Two')
console.log(findBooks)

getbook = books.filter((item)=> item.genre === 'Fiction')
console.log(getbook)

books.forEach( (book) => {
    if(book.publish === 2009){
         console.log(book)
         console.log('Here is your book..😉')
    }

})

