const arr = [0,1,2,3];

// NEVER REASSIGN BECAUSE THE POSITION IN MEMORY NEEDS TO BE KEPT => NEVER arr = []
//arr.length = 0 // use this to empty

// MUTABLE ARRAY METHODS
// MUTABLE => manipulating the given array
const newLength = arr.push(4) // 8 will be added at end
console.log(arr)  // [0,1,2,3,4]
console.log(newLength) // 5

// pop => removes last one




// IMMUTABLE ARRAY METHODS
// IMMUTABLE => using the array and returning a new one

const nrs1 = [1,2,3];
const nrs2 = [4,5,6];

//const together = nrs1.concat(nrs2); // ES5

const together = [...nrs1,...nrs2]; // es6 spread operator (spreads out the contents)
const objectOfTogether = together.entries()
console.log(objectOfTogether)

/* CONCEPT UNDO-REDO STATE 
const history = []
const undoPosition = 0;

const prevState = [1,2,3]
history.push(prevState)
undoPosition++;

const nextState = [...prevState,4]
history.push(nextState)
undoPosition++

history[undoPosition-2]
[[1,2,3],[1,2,3,4]]
*/



// original solution
// const grades = [50,23,60,70,80,82];
// const result = grades.every(function(grade){
//     if(grade>=50){
//         return true;
//     }else{
//         return false
//     }
// })
// console.log(result)


// refactored
const grades = [50,23,60,70,80,82];
const isPassed = val => val>=50;
const result = grades.every(isPassed) // all passed
const result2 = grades.some(isPassed) // minimum one passed
console.log(result)


//filter 
const onlyPassedGrades = grades.filter(function(grade){
    return grade >= 50
})


//reduce
const grades = [50,23,60,70,80,82];
const avg = grades.reduce(function(acc,grade){
    return acc+grade
},0)/grades.length


// forEach vs map
const numbers = [1,2,3,4,5];

const doubleIt = nr => nr*2;

const numbers_doubled = numbers.map(doubleIt).filter(el=>el>=50) // map returns new array with SAME LENGTH


const numbers_doubled2 = [];
numbers.forEach(function(number){
    numbers_doubled2.push(number*2)
})





const words = ["fire","water","fire","blood","sky","water"]

const wordsWithOccurance = words.reduce(function(obj,word){
    obj[word] = ( obj[word] || 0 ) + 1
    return obj;
},{})

console.log(wordsWithOccurance)
const uniqueWords = Object.keys(wordsWithOccurance)
console.log(uniqueWords)







