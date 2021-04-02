const http = require('http')
const url = require('url')

const port = 3000
const server = http.createServer((req, res) => {
    const url_path = req.url
        // check if url === '/'; if true, send message to the client
    if (url_path === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end('Hello from the server')
    } else if (url_path === '/about') {
        // if url === '/about'return json data about me
        res.writeHead(200, { "Content-Type": "application/json" })
        const about_me = {
            name: "Isaac",
            country: "Kenya",
            hobby: "Music",
        }
        res.end(JSON.stringify(about_me))
    } else if (url_path === "/page") {
        // if url path == '/page' render html page to the client

    }
})
server.listen(port, () => {
    console.log(`server running on port ${port}`)
})