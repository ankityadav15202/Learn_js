const num = [1,2,3,4]

const totalVal = num.reduce((acc, currVal)=>{
    console.log(acc,currVal)
    return acc + currVal
},0)
console.log(totalVal) // 10



// shopping cart

const shoppingCart = [
    {
        courseName : 'js',
        coursePrice : 100
    },
    {
        courseName : 'java',
        coursePrice : 300
    },
    {
        courseName : 'py',
        coursePrice : 250
    },
    {
        courseName : 'fsd',
        coursePrice : 900
    },
    {
        courseName : 'app dev',
        coursePrice : 1200
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>{
    console.log(acc, item.coursePrice);
    return acc + item.coursePrice
},0) 

console.log(priceToPay);