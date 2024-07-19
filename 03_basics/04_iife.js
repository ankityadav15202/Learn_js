// Immideate invoked function Expression
// 

(function chai(){
    // its named iife, means the iife function which has name 
    console.log('chai')
})(); // always use iife to end the iife

( (name) => {
    // its unnammed iffe, with parameter inside it
    console.log(` aur code welcomes ${name} `)
})('ankit'); //always use semicolon in iife to end 