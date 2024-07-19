const myNumbers = [1,2,3,4,5,6,7,8,9]

// const addNum = myNumbers.map((num)=>{
//     return num+10
// })

const addNum = myNumbers.map((num)=>{
    const add = num*10 && num+5
    return add+1
}).map((num)=>{
    return num/2
}).filter((num)=>{
    return num>5
})
// can also use chaining, means can apply map to another map or filter  
console.log(addNum)
