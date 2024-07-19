const score = 400 

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); //give the precise number for the first three number, eg. if num wa 123.8966 then output would be 124

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));

// ###########----Math----#############

console.log("Math Math Math Math");


console.log(Math);

console.log(Math.abs(-4));  // converts -ve number to +ve number only
console.log(Math.round(4.6));   // used to get round off, .ceil is used to get the top value, .floor will take the low value

console.log(Math.min(3, 5 , 8,5,8,7,6));
console.log(Math.max(3, 5 , 8,5,8,7,6));
console.log(Math.random()*10 + 1);
console.log(Math.random())
console.log(Math.round((Math.random()*10)+1));

const max = 20
const min = 10

console.log(Math.round(Math.random() * (max - min ) + min));
