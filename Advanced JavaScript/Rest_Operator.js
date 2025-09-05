// collect remaining element of an array after extract some element 
function sum(...numbers){ // rest operator
    return numbers.reduce((acc,curr)=> acc + curr ,0)
}
// console.log(sum(1,2,4,5));

// array destructuring 
const [first,second,...rest]=[1,2,3,4,5,6]
console.log(first);
console.log(rest);


// object destructuring
// const {a,b,...rest}={a:1,b:2,c:3}
// console.log(rest);


