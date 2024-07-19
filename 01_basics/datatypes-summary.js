// primitive data type

// 7 types : String, Number, Boolean, Null, Undefined, Symmbol, bigint

const score = 100
const scoreValue = 100.3
//above both are numbers, in js there is no float dsta type

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

const bigNumber = 651561668165165n
//reference type or (non-premitive) 

//Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Ankit",
    age: 20
}

const myFunction = function(){
    console.log("Hello world");
}


//#########################################################################################


// stack(primitive), and heap(Non-primitive)


let myYoutubeName = "nexUs"
let anothername = myYoutubeName

anothername = "nexUs2.o"

console.log(myYoutubeName);

console.log(anothername);
let userOne = {
    email: "nsfiub@hmail.com",
    upi: "kusdbf@ybl"
}

let userTwo = userOne

userTwo.email = "kusubdf@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);