const { models } = require("mongoose")

const add =(a,b)=> console.log("Addition:",a+b)
const div =(a,b)=> console.log("Division:",a/b)
const mul =(a,b)=> console.log("Multiplication:",a*b)
const sub =(a,b)=> console.log("Subtraction:",a-b)

module.exports = { 
    div, add, mul, sub
}




