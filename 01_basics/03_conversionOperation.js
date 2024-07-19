let score ="12345"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber);

// in number
// 33 => 33
// "33abc => NaN"
// true => 1; false => 0

let isLoggedIn = 1

let booleansIsLoogedIn = Boolean(isLoggedIn)
console.log(booleansIsLoogedIn);


//in boolean
// 1 = true; 0 = false
// "" = false;
// "kugdc" = true;

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);


//-----------------------Arethmatic operations -----------------------------

let value = 3
let negativeValue = -value
console.log(negativeValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "Ankit"
let str2 = " Yadav"
let str3 = str1+str2
console.log(str3);

console.log("2" + 1);
console.log(2 + "1");
console.log("2" + 1 + 1);
console.log(2 + 1 + "2");
console.log(+true);
console.log(+"");


//assignment operator
let num1, num2, num3
num1 = num2 = num3 = 2+2


//precedense operator

let gameoperator = 100
gameoperator++
// ++gameoperator
console.log(gameoperator);