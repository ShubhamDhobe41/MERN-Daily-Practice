// const fs= require('fs')


// // callback 
// fs.readFile('E:\\MERN_Stack_Dev\\demo.txt','utf-8',(err,data)=>{
//     if(err) return console.error(err)
//     console.log(data);
// })
// console.log("Reading file...");

// // promises 
// const fs = require('fs').promises;
// fs.readFile('E:\\MERN_Stack_Dev\\demo.txt', 'utf8')
//   .then(data => console.log("File content:", data))
//   .catch(err => console.error(err));
// console.log("Reading file...");


// // async/await
const fs = require('fs').promises

async function  readfileData() {
    try{
        const data = await fs.readFile('E:\\MERN_Stack_Dev\\demo.txt','utf-8')
         console.log("File content:", data);
          
    }catch(err){
        console.log(err);
        
    }
}
readfileData();
console.log("Reading file...");

