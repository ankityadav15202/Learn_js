const nums = [1,2,3,4,5,6,7,8,9]


// const myNums = nums.filter((num)=>{
//     return num>4
// })
// console.log(myNums);


const myNum = []

nums.forEach((num)=>{
    if (num>4) {
        myNum.push(num)
    }
})

console.log(myNum);



const myCoding = [
    {
        languageName : 'js',
        languageFileName : '.js'
    },
    {
        languageName : 'java',
        languageFileName : '.java'
    },
    {
        languageName : 'py',
        languageFileName : '.js'
    }
]


myCoding.forEach((item)=>{
    if (item.languageFileName==='.js') {
        console.log(item.languageFileName)
    }
})


const mycode = myCoding.filter((mycd)=>{
    return mycd.languageFileName=='.js' && mycd.languageName =='py' //whenever you use { } this scope in callback function you have to use return keyword?
})

console.log(mycode);


let books = [
    {
      "bookName": "To Kill a Mockingbird",
      "genre": "Classic",
      "publishYear": 1960,
      "edition": "First Edition"
    },
    {
      "bookName": "The Hunger Games",
      "genre": "Dystopian",
      "publishYear": 2008,
      "edition": "First Edition"
    },
    {
      "bookName": "Pride and Prejudice",
      "genre": "Romance",
      "publishYear": 1813,
      "edition": "Revised Edition"
    },
    {
      "bookName": "The Great Gatsby",
      "genre": "Classic",
      "publishYear": 1925,
      "edition": "Second Edition"
    },
    {
      "bookName": "Harry Potter and the Philosopher's Stone",
      "genre": "Fantasy",
      "publishYear": 1997,
      "edition": "First Edition"
    }
  ];

  const mybook = books.filter((bk)=>{
    return bk.genre=='Classic' && bk.publishYear==1960
  })

  console.log(mybook);