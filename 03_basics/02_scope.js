const b = 10 // value passed here is global variable or scope and it can be accessed in side any block or {}

if(true){

    // values or variable passes inside this is block variable and will not be accessed out side this block
    let a = 10
    const b = 20
    console.log(b);
    var c = 30
}

// console.log(a);
console.log(b);
// console.log(c);

// nesteed scope or nested function


function one(){
    const userName = "ankit"
    function two (){
        const website = "youtube"
        console.log(userName)
    }
    two()
    // console.log(website)
}

one()

// console.log(userName);


// nested loop scope

if(true){
    const userName = "ankit"
    if(userName==="ankit"){
        const website = "youtube"
        console.log(userName +website);
    }
    // console.log(website);
}

// console.log(userName);

// ++++++++++++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++++++

const mys = addOne(5)
console.log(mys)
function addOne (num){
    return num+1;
}

const addTwo = function (num){
    return num+2;
}
console.log(addTwo(5))