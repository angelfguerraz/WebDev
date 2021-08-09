const fs = require('fs')
const stream = require('stream')
const util = require('util')
let data = ''

// let buffer = Buffer.alloc(4)
// let buffer = Buffer.from([1,2,3,9])
let buffer = Buffer.alloc(26)
console.info(buffer)
for (let i = 0; i < buffer.length; i++) {
    buffer[i] = i + 97
}
console.info(buffer)

console.group('Stream')
let readableStream = fs.createReadStream(__dirname + '/input.txt')
// console.info(readableStream)
readableStream.setEncoding('utf8')
readableStream.on('data', (chunk) => {
    console.log(chunk)
})
console.groupEnd('Stream')

const transform = stream.Transform
function upperCase(){
    transform.call(this)
}
util.inherits(upperCase, transform)

upperCase.prototype._transform = function(chunk, codif, cb){
    chunkUp = chunk.toString().toUpperCase()
    this.push(chunkUp)
    cb()
}

let up = new upperCase()
readableStream
    .pipe(up)
    .pipe(process.stdout)
