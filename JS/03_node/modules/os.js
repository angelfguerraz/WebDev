const os = require('os')

console.log(os.arch()) // Architecture
console.log(os.platform()) // Platform commands
console.table(os.cpus()) // prints cores infos
console.log(os.cpus().forEach(e => console.table(e['times'])))