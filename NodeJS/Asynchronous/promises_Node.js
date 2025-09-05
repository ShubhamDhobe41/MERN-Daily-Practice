// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully!");
//   } else {
//     reject("Task failed!");
//   }
// });

// // Handling Promise
// myPromise
//   .then(result => console.log(result))   // if resolved
//   .catch(error => console.error(error)); // if rejected





function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let suceess = false
      if(suceess){
        resolve("Data fetch suceess")
      }else{
        reject("Error in fetching data ")
      }
    }, 1000);
  })
}
fetchData().then((result)=>{
  console.log(result);
}).catch(error=>console.log(error));
