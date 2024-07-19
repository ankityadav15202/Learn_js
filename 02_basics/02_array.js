const marvel_heros = ["Iron-man", "spider-man", "black-widow"]
const dc_heros = ["flash", "wonder-women", "bat-man"]

// marvel_heros.push(dc_heros) // by doing this the marvel_heros takes the whole dc_heros as an one element and makes array inside an array
                                                            /* [
                                                                'Iron-man',
                                                                'spider-man',
                                                                'black-widow',
                                                                [ 'flash', 'wonder-women', 'bat-man' ]
                                                            ]*/
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to access array inside of array we've to this


// const allheros = marvel_heros.concat(dc_heros) // .concate() returns new array and .push() adds data on existing array

// console.log(allheros);

const myheros = ["shaktiman","hero"]


const all_new_heros = [ ...dc_heros, ...marvel_heros, ...myheros ] //this is spread meethod, syntax is [...xyz, ...iys, ...ubd] it adds 2 or more arrays into one new array
console.log(all_new_heros);

const another_array = [1,2,3,[2,3,4],4,5,[4,5,6,[5,6,7]]]

const real_another_array = another_array.flat(Infinity) // the .flat(infinity) method Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. 

console.log(real_another_array);

console.log(Array.isArray("ankit"))
console.log(Array.from("ankit"))
console.log(Array.from({name: "ankit"})); // returns empty box caus ewe have to simplyfiy what we want in array, key or value? intresting for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements. eleents can be any thing like vareable or array


// study more about from, isArray and of