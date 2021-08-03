let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character/'
/*
    .readyState:
    0: Initialize
    1: Server connection established
    2: Request received
    3: Processing request
    4: Finalized and response is ready

    .status:
    200: "OK"
    403: "Forbidden"
    404: "Page not found"
*/

function fetch_data(url_api, callback) {
    let xhttp = new XMLHttpRequest() // instance of ...

    xhttp.open('GET', url_api, true) // starts request (here: GET). True enables Async

    // Defines a function to be called when the readyState property changes
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { // 5 states (0...4)
            if (xhttp.status === 200) { // OK
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Failure: ' + url_api)
                return callback(error, null)
            }
        }
    }

    xhttp.send()
}

// Callback hell: Multiple concat of functions
fetch_data(API, function (error1, data1) {
    if (error1) return console.error(error1)
    fetch_data(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2)
        fetch_data(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
