const fs = require('fs')
const FILE = __dirname + '/file.txt'

function read(path, callback) {
    fs.readFile(path, (error, data) => {
        console.log(data.toString())
    })
}

function write(path, content, callback) {
    fs.writeFile(path, content, (error) => {
        if (error) {
            console.error("Failure: ", error)
        } else {
            console.log("Succeed! ^^")
        }
    })
}

write(FILE, "I'm a new file :D", console.log)
read(FILE, console.log) //prints a buffer
