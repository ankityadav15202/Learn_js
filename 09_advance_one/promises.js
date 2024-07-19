const promiseOne = new Promise((resolve,reject)=>{ //new is used to create a instance
    // do an async tasks
    setTimeout(() => {
        console.log(`async task is complete`);
        resolve()
    }, 1000);
})

promiseOne.then(()=>{
    console.log(`promise consumed`);
})



new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`Async 2 task`);
        resolve()
    }, 1000)
}).then(()=>{
    console.log(`async 2 resolved`);
})


new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            name: 'John',
            age: 30
        })
    }, 1000);
}).then((user)=>{
    console.log(user.name);
})


new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = 22
        if(isNaN(error)){
            resolve({
                name: 'John',
                age: 30
            })
        }else{
            reject('Something went wrong')
        }
    }, 1000);
})
.then((user)=>{
    console.log(user);
    return user.name
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('finally the promise is either resolved or rejected ');
})

const promisefive = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        let error = "5"+"as"
        if(isNaN(error)){
            resolve({
                name: 'John',
                age: 30
            })
        }else{
            reject('js went wrong')
        }
    }, 1000);
});


async function consumepromisefive(){
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive()



// async function getalldata(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log('e : ',error);
//     }
// } 

// getalldata()


fetch('https://jssonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('error : ',error)
})