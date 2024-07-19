//use forin loop for object
let person = {
    name: "John",
    age: 30,
    city: "New York"
    }
for (let key in person) {
    console.log(key + " : " + person[key]);
}


const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift : 'swift'
}

for (const key in myObj) {
    console.log(myObj[key]);  // here the myobj[key] means the myobj will return the value of the current key. if key is js then it will return javascript
}

// console.log(myObj.rb)

const num = [2,2,3,4,5,6,5]

for (const key in num) {
    console.log(num[key])  //here key is the index value
}