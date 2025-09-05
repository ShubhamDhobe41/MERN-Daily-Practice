// // Creating a Basic HTTP Server, Using http module to create a server,
// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     res.end('Hello, Node.js Server!')
// })
// server.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// })





// Handling Requests and Responses
const http = require('http')
const server = http.createServer((req,res)=>{
   if(req.url=='/'){
     res.writeHead(200, { "Content-Type": "text/html" });
     res.end("<h1>Welcome to Home Page</h1>");
   }else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Us Page</h1>");
  }else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
})
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})

