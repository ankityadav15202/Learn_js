// for each

const coding = ['html', 'js','java']

// coding.forEach(element => {
//     console.log(element)
// })


// function print(item){
//     console.log(item)
// }

// coding.forEach(print)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })


const myCoding = [
    {
        languageName : 'js',
        languageFileName : '.js'
    },
    {
        languageName : 'java',
        languageFileName : '.java'
    },
    {
        languageName : 'py',
        languageFileName : '.py'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName,item.languageFileName)
})