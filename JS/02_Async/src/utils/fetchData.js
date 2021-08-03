let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

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

const fetch_data = (url_api) => {

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest() // instance of ...

        xhttp.open('GET', url_api, true) // starts request (here: GET). True enables Async

        // Defines a function to be called when the readyState property changes
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) { // 5 states (0...4)

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Failed: ', url_api))
            }
        })

        xhttp.send()
    })
}

// exports function 'fetch_data' for global use
module.exports = fetch_data;