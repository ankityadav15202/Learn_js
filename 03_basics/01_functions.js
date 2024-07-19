function sayMyName(){
    console.log('a')
    console.log('n')
    console.log('k')
    console.log('i')
    console.log('t')

}

// sayMyName // this is reference of function // remember for react or onclick dom manipulation \
sayMyName()

// function addTwoNumbers (a,b){ // parameters passes
//     console.log(a+b);
// }



function addTwoNumbers (a,b){ // parameters passes
    // result = a+b
    // return result

    return a+b
}
result = addTwoNumbers(1,"1") // arguments passed 
// result = addTwoNumbers(5,"1") // arguments passed 

console.log(result) // need to store in a variable


function loginUserName(username){  // username = "sam" then it will return sam if no argument is passed
    // if(username === undefined){  // same logic as the below 
    if(!username){
        return `Please enter username` 
    }
    else{
        return `${username} just logged in`
    }

}


const user = loginUserName("ankit")
console.log(user)

console.log(loginUserName()) // if no arument is passed then it will return undefined, (null nhi return karega)


// pass multiple values in argument 

function calculateCartPrice(...num1){ //used rest and spread operator (...num) to get multiple values in parameter from argumnet,  here ... dots are the rest and spread operator
    return num1
}

console.log(calculateCartPrice(1, 12, 14));

// handle objects using function

const users = {
    username : "ankit",
    password : '123ank'
}

function handleobjects(anyobject){
    console.log(`${anyobject.username} is logged in and, ${anyobject.password} is the password`)
}

// handleobjects(users)
handleobjects({
    username : "ank",
    password : 141
})

// handle array using function

const  userArray = ["ankit", "sahil", 'nikhil']

function arrayfunction(myArray){
    return myArray[2]
}

console.log(arrayfunction(userArray))
console.log(arrayfunction([1,2,3]))
