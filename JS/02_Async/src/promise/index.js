const { performance, PerformanceObserver } = require("perf_hooks")


const sometimesWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey! Resolve executed...')
        } else {
            reject('Whoops! Rejected...')
        }
    })
}

sometimesWillHappen()
    .then(response => console.log(response)) //resolve
    .catch(err => console.error(err)) // reject


// Playing with time:
var t0 = performance.now()
const sometimesWillHappen_2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Resolve under 2ms')
            }, 2)
        } else {
            const error = new Error('Whoops! Took longer than 2ms') // Apply for debugging
            reject(error)
        }
    })
}
var t1 = performance.now()
console.log("Taken time: " + (t1-t0))

sometimesWillHappen_2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([sometimesWillHappen(), sometimesWillHappen_2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.error(err))