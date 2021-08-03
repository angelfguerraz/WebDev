const doSomething_Async = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async done!'), 3000)
            : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const smth = await doSomething_Async()
    console.log(smth)
}

console.log('Before 1')
doSomething()
console.log('After 1')

const anotherFunction = async () => {
    try {
        const smth = await doSomething_Async()
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 2')
anotherFunction()
console.log('After 2')