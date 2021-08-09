// creates asynchronous function
async function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Hi " + name)
            resolve(name) // returns this
            reject('Troubles in greet') // or this
        }, 1000)
    })
}

async function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla, bla, bla...')
            resolve()
            reject('Troubles in talk')
        }, 1500);
        resolve()
    })
}

async function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('bye ' + name)
            resolve()
            reject('Troubles in bye')
        }, 1000)
        resolve()
    })
}

async function main() {
    let name = await greet("angel")
    await talk()
    await talk()
    await talk()
    await bye(name)
}

console.log('Process starts')
main()
console.log('Second executed')