const bcrypt = require('bcrypt')
const moment = require('moment')
const sharp = require('sharp')

/* BCRYPT */
const password = '1234_secure!'

bcrypt.hash(password, 5, (error, hash) => {
    console.log(hash)

    bcrypt.compare(password, hash, (error, response) => {
        console.log(response)
    })
})

/* MOMENT */
let now = moment()
// console.info(moment)
console.info(now.toDate())
console.info(now)
console.log(now.format('YYYY-MM-DD HH:MM'))

/* SHARP */
sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')