"use strict"

console.log(sum(4,2))

console.log(name)

//common vars are hoisted with value undefined
var name = "Hanim";
var age = 28;

//functrion statement = hoisted with code block
function sum(a,b){
    return a+b;
}

//same rule as common var
var avg = function(a,b){
    return (a+b)/2
}

console.log(name)

console.log(sum)
console.log(avg)