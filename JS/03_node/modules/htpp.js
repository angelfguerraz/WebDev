const http = require('http')
const PORT = 3000

http.createServer(router).listen(PORT)

function router(req, res) {
    console.log("New request...")
    console.log(req.url)

    switch (req.url) {
        case '/hello':
            res.write("Hello there!")
            res.end()
            break;

        default:
            res.write('Error 404... :(')
            res.end()
            break;
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // // Writes response to the user
    // res.write("Using http with Node")

    // res.end()
}

console.log("Listening at port: " + PORT)