// array 

const array = [11,32,23,44,55]
const myheros = ["shaktiman","hero"]
const myArray = new Array(1,2,3,4)
console.log(array[2]);

//array methods

array.push(6) // to add values in array
array.push(7) // to add values in array
console.log(array);
array.pop() // removes the last value from the array
array.unshift(9) // add's the value at the starting which is passed in the parenthesis
console.log(array);

array.shift() // removes the first value added in the unshift() method 
console.log(array);


console.log(array.includes(4))  // there are some quatinioure methods in array which just answer in true/false
console.log(array.indexOf(3));  // gives the index value of entered value

const newarray = array.join() // converts array to string

console.log(newarray);


// slice , splice

console.log("a", array)

const slice_arrray =  array.slice(1,3) // slice Returns a copy of a section of an array. gives values of given range of index
console.log(slice_arrray);
console.log("slice returns copy of the array" , array);

const splice_arrray = array.splice(1,3) //splice Removes elements from an array 
console.log(splice_arrray)
console.log("splice Removes elements from an array" , array);


// const array = [11,32,23,44,55]
// console.log(array)
// run this command in  browser>inspect>console and from the results click on prototype() for more methods