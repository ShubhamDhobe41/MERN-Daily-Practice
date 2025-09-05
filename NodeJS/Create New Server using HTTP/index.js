const http = require('http')
const fs = require('fs')


const myServer = http.createServer((req,res)=>{
    // console.log(req);
    const log = `${Date.now()}: New Request Received \n`
    fs.appendFile('log.txt',log,(err,data)=>{
         console.log("New Request Received");
         res.end("Hello from server")
    })
})

myServer.listen(1000,()=>{
    console.log("Server running at http://localhost:3000");
})