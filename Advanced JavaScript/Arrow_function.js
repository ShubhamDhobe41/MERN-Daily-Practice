function sum (a,b){
    return a + b
}
// console.log(sum(2,4));


// anonymous function
let sum1 = function(a,b){
    return a+b
}
// console.log(sum1(4,8));

// arrow function
let sum2 = (a,b)=>{
    return a+b
}
let sum3 = (a,b)=> a+b
let square = a =>  a*a
// console.log(sum2(4,8));
// console.log(sum3(8,8));
// console.log(square(8));


let fetchData= function(){
console.log("fetch");

}
//  using callback 
fetchData(function(data){
    console.log("Received",data);  
})
// using Arrow function
fetchData(data =>{
    console.log("Received",data);  
})

