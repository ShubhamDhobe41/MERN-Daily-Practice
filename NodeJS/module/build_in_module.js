const { log } = require('console');
const fs = require('fs')
const os = require('os')

// calculate cpu core 
// console.log(os.cpus().length);


// write or create file in synchronous
// fs.writeFileSync("file.txt",'hello from file system ')

// write or create file in Asynchronous
// fs.writeFile("file.txt",'hello from file system asynchronous ',(error)=>{})

// Read file synchronous
// const result = fs.readFileSync("file.txt",'utf-8')
// console.log(result);

// Read file Asynchronous with callback 
// fs.readFile("file.txt",'utf-8',(error,result)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(result); 
//     }
// })


// append file synchronous
// fs.appendFileSync("file.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("file.txt","\n appended text")

// append file Asynchronous
// fs.appendFile("./demo.txt","\n appended text here ",(err)=>{
//       if (err) throw err;
//   console.log("Text appended!");
// })


// append file Asynchronous
// fs.appendFileSync("file.txt",`\n appended text asynchronus \n ${Date.now()} `,(error,result)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(result); 
//     }
// })


// copy file using synchronous 
// fs.cpSync("file.txt","copy.txt")


// Delete file synchronus
// fs.unlinkSync("./copy.txt")

// Delete file Asynchronus
// fs.unlink("./demo.txt",(err)=>{  if (err) throw err;
//   console.log("file deleted !");})


// rename file 
// fs.rename('./old.txt', 'new.txt', (err) => {
//   if (err) throw err;
//   console.log("File renamed");
// });

// check statistics
// console.log(fs.statSync("./file.txt"));
// console.log(fs.statSync("./file.txt").isFile());
// console.log(fs.statSync("./file.txt").isDirectory());



// create directory 
// fs.mkdirSync('dummy-folder-using-mkdir')


