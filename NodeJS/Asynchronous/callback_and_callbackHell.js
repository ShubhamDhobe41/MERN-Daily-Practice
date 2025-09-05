//// function pased as a argument
// function greet(name,callback){
//     console.log("hello"+name);
//     callback()
// }

// // callback
// greet(" shubham",()=>{
//     console.log("Welcome to Node js ");
// })


const fs =require('fs')
fs.readFile('E:\\MERN_Stack_Dev\\demo.txt','utf-8',(err,data)=>{
     if (err) return console.error(err);
  console.log("File content:", data);
})
console.log("Reading file...");

