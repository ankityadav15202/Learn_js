// for loop

for (let i = 0; i < 15; i++) {
    const element = i;
    if(element==5){
        console.log('5 is best');
    }
    console.log(element);    
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        // console.log(`j is ${j},  and i is ${i}`);
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

const array = ['ankit', 'sahil', 'nikhil', 'aryan']
for (let index = 0; index < array.length; index++) { // .length give number if length of elements from 1 onwards not from 0
    const element = array[index];
    console.log(element);    
}

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index==5){
        console.log('5 is best')
        break; // when the index became 5 the loop will break
    }
    console.log(element);
    
}

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index==5){
        console.log('5 is best')
        continue; // the continue sgtatement prints the 5 only once
    }
    console.log(element);
    
}