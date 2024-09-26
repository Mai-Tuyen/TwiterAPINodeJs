// đây là module có sẵn dùng để tạo server nodejs
const http = require('http')
console.log(http)
const PORT = 4000
// Tạo một server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','application/json')
    res.end(`{"message" : "Hello world"}`)
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})