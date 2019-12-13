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
4. Write a Javascript function that return an array with even numbers between a range
	getEvenNumbersInRange(56,1211)
*/

/*
5. Write a Javascript function that calculate the distance between two coordinates.
	getDistance([20,100],[50,800])
*/
