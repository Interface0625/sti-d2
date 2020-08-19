console.log("hej")

const fs = require('fs')
const js = require('./nodeModule.js')

js.sayHello()

console.log( (new Array(80)).join('-') )

fs.readdir('./', (err, files) => {
    files.forEach(file => {
        console.log(file)
    })
})