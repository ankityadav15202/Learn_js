// const tinderUser = new obj55()//this is singleton object

// const tinderUser = {} this is lateral object or non singleton object

tinderUser.id="123abc"
tinderUser.name="ankit"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const users = [
    {
        id : 123,
        email : "a@gmail.com"
    },
    {
        id : 123,
        email : "a@gmail.com"
    },
    {
        id : 123,
        email : "a@gmail.com"
    }
    
]


users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(Object.length(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const obj1 = {
    1 : 'a',
    2: 'b'
}
const obj2 = {
    3:'c',
    4:'d'
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
const obj3 = {...obj1,...obj2}

console.log(obj3);


const nestedObj = {
    firstname : {
        userFullName : {
            firstname : 'ankit',
            lastName : 'yadav'
        }
    },
    email : 'ankit@gmail.com'
}

console.log(nestedObj.firstname.userFullName.lastName);