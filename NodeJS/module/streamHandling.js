const fs = require("fs");
const readstrem = fs.createReadStream("demo.txt","utf-8")

readstrem.on("data",(chunk)=>{
   console.log("New chunk received:");
  console.log(chunk); 
})

readstrem.on("end",()=>{
   console.log("finish read file");
   
})