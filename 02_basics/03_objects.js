//singleton
// ...



//object letral 


const mySym = Symbol("key1")

const jsobj = {
    name : "ankit",
    [mySym] : "symKey",
    surname : "yadav",
    email : "anky1522@gmail.com",
    contact : 8160594584,
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsobj.name)
// console.log(typeof(jsobj["email"]))
// console.log(jsobj[mySym])

// console.log(jsobj)

jsobj.greeting = function(){
    console.log(`Hello js user : ${this.contact}`)
}
console.log(jsobj.greeting())