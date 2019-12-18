// 1. Write a JavaScript function to check if a certain word is a Palindrome.
function palindrome(str) {
    let reverseStr = str.split('').reverse().join(''); 
    return reverseStr === str;
  }
// maybe you could try to write this in one line?
// const palindrome = str => str===str.split('').reverse().join('');
// 2. Write a JavaScript function to get a random item from an array.

function random(arr){
    
    return arr[Math.floor(arr.length*Math.random())]
}
// maybe you could try to write this in one line?

// 3. Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const swapCase = function(str){
    let newStr = "";
    for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    
    return newStr;
}


// 4.Write a JavaScript function to compute the sum of an array of integers.
//I prefer you to use a reduce method here
const sumOfArray= arr=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum
}

const sumOfArray = arr => arr.reduce((sum,nr)=>sum+nr,0)

// [2,3,1]

// (0,2)=>return 2
// (2,3)=>return 5
// (5,1)=>return 6

// arr.reduce(function(accumulator,nr){
//     return sum+nr
// },startNr)







// 5. Write a JavaScript function to remove a specific element from an array 
// var myNames = ["John","Cindy","Omer","Barbie","Barbie"];
// removeSpecificelement(myNames,"Barbie");

const removeSpecificelement=(arr, el)=>{
    return arr.filter(x=>x!==el)
    //ask question here
	// shorter version?
}

const removeSpecificelement=(arr, el)=>arr.filter(x=>x!==el)


// 6. Write a function to remove all strings with less than X characters 
//from an array of strings

const lessThanXLength=(arr, number)=>{
    return arr.filter(str=>str.length<number)
}

// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.

const generateFib=lgt=>{
    arr=[]
    for (let i=0; i<lgt; i++){     
        arr.push(i)
    }
}
///???????? 0 and 1 problem?

const generateFib = lgt => new Array(lgt-2).fill("x").reduce(function(arr){
    arr.push(arr[arr.length-1]+arr[arr.length-2]);
    return arr;
},[0,1])

// "" or '' of `` => new String()
// 8 or => new Number(8)
// false => new Boolean(false)
// never use this way of creating numbers,booleans and Strings because the strict equality check will fail

// you could use this => no problem
// [] or => new Array();
// {} or => new Object();




/* 
8. Write a JavaScript function that returns array elements larger than a number

given: 
	var numbers = [5,2,20,60,45];
	var toCheck = 6;

returned array:
	[20,60,45]
*/ 
const largerThanXNumber=(arr, number)=> arr.filter(e=>e>number)


// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);
const randomRgb=()=>{
    var r = Math.floor(Math.random()*256);          
    var g = Math.floor(Math.random()*256);          
    var b = Math.floor(Math.random()*256);          
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
}


/* 10. Write a JavaScript program to find the types of a given angle.  Go to the editor	
  Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const typeOfAngle=angle=>{
    if (angle<90){
        console.log("this is acute angle")
    } else if (angle==90){
        console.log("this is right angle")
    } else if (angle > 90 && angle < 180){
        console.log("this is obtuse angle")
    } else if (angle==180){
        console.log("this is Straight angle")
    }
    else{
        console.log("no description")
    }
}

const typeOfAngle = function(angle){
    switch(true){
        case angle==90: console.log("this is right angle");
        case angle<90: console.log("this is acute angle");
        case angle > 90 && angle < 180: console.log("this is obtuse angle");
        case angle==180: console.log("this is straight angle");
        default: console.log("no description")
    }
}




//11. Write a JavaScript function to merge two arrays and removes all duplicates elements.
//FROM HERE NO FOR LOOPS ALLOWED
const mergeArray=(arr1, arr2) => [...new Set([...arr1,...arr2])]

/*
12. given [2,1,6,4]
    expected => [8,1,216,64] => the power 3

    thirdPower([2,1,6,4])
*/
const givenPower=(arr, number)=>{
    function powerOf(i){
        return Math.pow(i, number)
    }
    return arr.map(powerOf)
}


const givenPower=(arr, number)=> arr.map(el=>Math.pow(el,number))







// [2,4,6,1].map(el=>el*2)
// [2,4,6,1].map(el=>el*3)

// function powerIze(powerNr){
//     return function(el){
//         return el*powerNr
//     }
// }


// [2,4,6,1].map(powerIze(10))


















/*
13. given [2,1,6,4]
    expected => [8,1,216,64] => the power N
    nthPower([2,1,6,4],16)
*/
const givenPower=(arr, number)=>{
    function powerOf(i){
        return Math.pow(i, number)
    }
    return arr.map(powerOf)
}


/*
14. given [2,1,6,4]
    calc avg
    calc sum    (reduce)
*/
const sumOfArray = arr => arr.reduce((sum,nr)=>sum+nr,0)
const avg= (arr, sumOfArray)=> sumOfArray/arr.length;



// 15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"] remove all the names that do not start with a capita
const checkFirstLetterCase= arr=>arr.filter(x=> x[0]===x[0].toUpperCase())


// 16. Write a Javascript function to find how many times a certain number occurs in that array.



// 17. Write a JavaScript program to find the most frequent item of an array.
