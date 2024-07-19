const name = "Ankit"
const age = 20

// console.log(name + age + "values")

// string interpolation is the moder way to concatinate

console.log(`Hello my name is ${name} and my age is ${age}`);

const gamename = new String ("gamename")
console.log(gamename[2])
console.log(gamename.toUpperCase())
console.log(gamename.length)
console.log(gamename.charAt(5))
console.log(gamename.indexOf('m'))

const newString = gamename.substring(0, 4)
console.log(newString);

const newString2 = gamename.slice(-8, 4)
console.log(newString2);
 

///trim function
const newString3 = "     lkuindf     "
console.log(newString3);
console.log(newString3.trim());

/////  replace function

const url = "https://ankit.com/marks gtu"

console.log(url.replace(" ","-"));


//// to know the specific word is in there or not 
console.log(url.includes(".com"));
console.log(url.includes("xyz"));

///to split 
console.log(url.split(" "))