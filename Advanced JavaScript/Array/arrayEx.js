let name1 = "Ajay"
let name2 = "Manish"
let name3 = "Rahul"
let name4 = "kiran"
let name5 = "hemant"


let arr = ["Ajay","Manish","Rahul","kiran","hemant"]
// console.log(arr[0]);


let studInfo = ["rollno",1,null,true,
    343.44,{name:"rahul"}]
// console.log(studInfo[5].name);
// console.log(studInfo[0]);
// console.log(studInfo[1]);
// console.log(studInfo[3]);
// console.log(studInfo[4]);
// console.log(studInfo[5]);
// console.log(studInfo[6]);//undefined
// console.log(typeof studInfo);

//// for loop 
for(let i=0;i<=5;i++){
    // console.log(studInfo[i]); 
}
//// for-each loop
studInfo.forEach(function(std,index){
    console.log(`the item is ${std} in index ${index}`);  
})






