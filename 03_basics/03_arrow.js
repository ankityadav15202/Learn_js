const user = {
    useraname : 'ankit',
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.price}, welcome to wewbsite`)
        console.log(this) // it will give current context or current values
    }
}

user.welcomeMessage()
user.price = 'sam'
user.welcomeMessage()
console.log(this) // it will give current context or current values here context is empty cause, there is no context in global


function chai(){
    let userName = 'ankit'
    console.log(this.userName); //can't use .this in function it not works in function like this will give undefined
}

chai()


const chais = () => {
    let name = 'ankit'
    console.log(name);
}

chais()



// basic arrow  function
const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(5,7))

//implicit return

const addOne = (num1,num2) => num1+num2

console.log(addOne(1,5));

const addObject = () => ({userName: 'sahil'})

console.log(addObject())