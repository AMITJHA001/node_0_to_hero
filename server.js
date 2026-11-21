const os = require("os")
const path = require("path")
const {add,mul,div,sub} = require("./math")

add(1,2)
mul(1,2)
div(1,2)
sub(1,2)

console.log("OS:",os.type())
console.log("OS Version:",os.version())
//console.log(os.homedir())


console.log("Dictory:",__dirname)
console.log("File Path:",__filename)


console.log("Directory Name:",path.dirname(__filename))
console.log("Extension:",path.extname(__filename))
console.log("Base Name:",path.basename(__filename));
console.log("File Object:", path.parse(__filename))


