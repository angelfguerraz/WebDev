const os = require('os')

console.log(os.arch()) // Architecture
console.log(os.platform()) // Platform commands
console.table(os.cpus()) // prints cores infos
console.log(os.cpus().forEach(e => console.log(e['times'])))

// System constants
// console.log(os.constants)

const SIZE = 1024
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }
console.log(os.freemem() + ' bytes')
console.log(kb(os.freemem) + ' KB')
console.log(mb(os.freemem) + ' MB')
console.log(gb(os.freemem) + ' GB')
console.log("Total memory: " + gb(os.totalmem) + ' GB')

// Prints directories
console.log(os.homedir())
console.log(os.tmpdir())

// Console Interfaces
// console.log(os.networkInterfaces())