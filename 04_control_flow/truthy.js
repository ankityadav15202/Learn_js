const userEmail = []
if(userEmail){
    console.log('got email')
}
else{
    console.log('no email')
}

// falsey values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// [], "0", 'false', " ", {}, function(){}

if(userEmail.length===0){
    console.log('array is empty');
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log('empty obj')
}


// Nullinsh Coalescing Operator (??) : null, undefined

const val1 = null ?? 10 // if  val1 is null, then 10
const val2 = undefined ?? 15 // if val2 is undefined , then 15

console.log(val1)
console.log(typeof(val2));