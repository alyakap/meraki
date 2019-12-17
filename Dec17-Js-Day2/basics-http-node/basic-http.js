// content of index.js
const http = require('http')
const port = 4567

const server = http.createServer(function(request,response){
    console.log(request.url)
    response.end('Hello David Server!')
})

server.listen(port)

console.log(server.address().port);








// function requestHandler(request, response){
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// }

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })