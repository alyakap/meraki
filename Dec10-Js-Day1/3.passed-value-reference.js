/*
// PRIMITIVES => passed/assigned by VALUE
- Null
- Undefined
- Number
- String
- Boolean

// OTHERS => passed/assigned by REFERENCE
- Array
- Object
- Function
*/


let age = 28;
let age2 = age;
age = 30;
console.log(age); //30
console.log(age2); //28


const nrs = [1,2,3,4,5];
const nrs2 = nrs; // NOT passing the value BUT passing the REFERENCE IN MEMORY
nrs.push(6);

console.log(nrs); // [1,2,3,4,5,6]
console.log(nrs2); // [1,2,3,4,5,6]





const names = ["David","Els","Hanim"]
addTwoToArray(names,"Bart","Roel")
console.log(names)

function addTwoToArray(arr,a,b){
    arr.push(a);
    arr.push(b);
}


