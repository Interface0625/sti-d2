

/// ES5


var x = true

// ES6
const c = "readonly"
let f = "hello"

console.log(this)


function test(){
    console.log(this)
}

function func2(){
    const arrowFunc = () => console.log(this)
}



// ES6
class superAwesomeClass {
    constructor(){
        this.testProp = 1
    }
    edit(){
        this.testProp = 2
    }
    print(){
        console.log(this.testProp)
    }
}

const cls = new superAwesomeClass()

cls.print()
cls.edit()
cls.print()












// ES5
var awesome = 1

function es5class(){
    this.awesome = 2
}

var anonFunc = function(){
    this.awesome = 2
}
var keyValPairs = { 
    edit: anonFunc
}

es5class.prototype = keyValPairs















const clses5 = new es5class()

clses5.print()
clses5.edit()
clses5.print()















