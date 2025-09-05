// Promises with Async Functions
// const fs = require('fs').promises;
// fs.readFile('E:\\MERN_Stack_Dev\\NodeJS\\File Handling\\demo.txt','utf-8')
//   .then(data=>console.log("file content",data))
//   .catch(err=>console.log(err))

//// async/await in Node.js
// const fs = require('fs').promises;
// async function  readFileData() {
//     try{
//          const data = await fs.readFile('E:\\MERN_Stack_Dev\\NodeJS\\File Handling\\demo.txt', 'utf8');
//          console.log("File content:", data);
//     }catch (err) {
//     console.error("Error:", err);
//   }
// }
// readFileData();




  function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let suceess = true
      if(suceess){
        resolve("Data fetch suceess")
      }else{
        reject("Error in fetching data ")
      }
    }, 1000);
  })
}
async function getData() {
    try{
        let result = await fetchData()
        console.log(result);
        
    }catch(error){
        console.error(error)
    }
}
getData()



  

