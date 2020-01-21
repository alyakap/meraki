/*
1. Write a JavaScript function that returns an array with generated  Multiplication Table of a given number (max. 1000 iterations)
	var result =  generateMultiplicationTable(5);
	console.log(result);
*/
const generateMultiplicationTable=function(number){
    let result=[];
    for (let i=0; i<1000; i++){
        result.push( i*number)
    }
    return result;
}

/* Alternative
const multiplication = nr => "x".repeat(1000).split("").fill(1,0,999).map((el,i)=>nr*i)

const multiplication = (nr,iterations) => "x".repeat(iterations).split("").fill(1,0,iterations-1).map((el,i)=>nr*i)
*/

/*
2. extension of first challenge:
	Every time a value in the array is divisible by 20 add an (asterisk)* to it  
*/
const generateMultiplicationTable=function(number){
    let result=[];
    for (let i=0; i<1000; i++){
        if ((i*number)%20===0){
            result.push(i*number+"*")
        }
        else{
            result.push(i*number)
        }
    }
    return result;
}

/*
3. Write a Javascript function to return wether a value is divisible by a certain number

	isDivisible(333,7)
	=> false
*/
const isDivisible= (n1, n2)=> (n1%n2===0)
/*
	or const isDivisible = (n1, n2) => n1%n2===0
*/
/*
4. Write a Javascript function that return an array with even numbers between a range
	getEvenNumbersInRange(56,1211)
*/
const getEvenNumbersInRange=function(n1,n2){
    let arr=[];
    for (let i=n1; i<=n2; i++){
        if (i%2===0){
            arr.push(i)
        }
    }
    return arr
}
/*
5. Write a Javascript function that calculate the distance between two coordinates.
	getDistance([20,100],[50,800])
*/
const getDistance=(x1, y1,x2, y2)=>Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))


