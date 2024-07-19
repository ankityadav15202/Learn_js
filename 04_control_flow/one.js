// if(consition){
    //this is scope
// }


const isUserLoggedIn = false

if(isUserLoggedIn){
    console.log('executed')
}
else{
    console.log('not executed') 
}

console.log('done')


// comparison operator
// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if(score == 200){
    const power = 'fly'
    console.log('User Power is : ',power)
    console.log(`User superpower is ${power}`)

}


const balance = 1000

if(balance > 500)
    console.log('test')
else if(balance > 100)
    console.log('test2')
// its implicit function, don't use this

const UserLoggedIn = true
const debit = false
const googleLogin = false
const emailLogin = true
if(UserLoggedIn && debit){ // logocal operator
    console.log('Shopping continue')
}else if (!debit){
    console.log('Please add debit card')
}else if(!UserLoggedIn){
    console.log('Please login')
}

if(googleLogin || emailLogin){ // || is logical operatoor and it means either this or this, if any one of these is true the condition is true
    console.log('Login success')
}

