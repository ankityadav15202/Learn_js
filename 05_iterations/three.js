// forof loop use for array

const arr = [1,2,3,4,5,6]


for (const num of arr) {
    // console.log(num);
}

const greeting = 'hello world'
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

// maps
// maps has unique values and its ordered 
const map = new  Map()
map.set('IN',"India")
map.set('PK','pakistan')
map.set('GJ',"Gujarat")

// console.log(map);
for (const [key, value] of map) {
    console.log(key,'-:',value)
}