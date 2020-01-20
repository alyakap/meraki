/*
1- Write a JavaScript function to check whether a string is blank or not.
	console.log(is_Blank('')); 
		true 
	console.log(is_Blank('abc'));
        false
*/
const is_blank = s => s ? true : false;

/***************/ //better solution from David
// const is_blank = s => s === ""
/**************/

/*
2- Write a JavaScript function to hide email addresses to protect from unauthorized user.
	console.log(protect_email("robin_singh@example.com"));
		"robin...@example.com"
*/
const protect_email = function(email){
    const parts = email.split('@'); // [0] => "robin_singh", [1] => "example.com"
    const firstPart = parts[0].substr(0,5);
    return firstPart+"...@"+parts[1]
}

/***************/
// const is_blank = s => s === ""
/**************/


/*
3- Write a JavaScript function to insert a string within a string at a particular position (default is 1).
	console.log(insert('We are doing some exercises.')); 
		"We are doing some exercises." 
	console.log(insert('We are doing some exercises.','JavaScript ')); 
		"JavaScript We are doing some exercises." 
	console.log(insert('We are doing some exercises.','JavaScript ',18));
		"We are doing some JavaScript exercises."	
*/
const insert = function(s1,s2="",p=0){
    // const str2 = str2 || ""; => default params in es5
    // const position = position || 0; => default params in es5
    return s1.substr(0,p)+s2+s1.substr(p)
}

console.log(insert('heo','ll',2))

/*    
4- Write a JavaScript function to chop a string into chunks of a given length.
	console.log(string_chop('w3resource')); 
		["w3resource"] 
	console.log(string_chop('w3resource',2)); 
		["w3", "re", "so", "ur", "ce"] 
	console.log(string_chop('w3resource',3));
		["w3r", "eso", "urc", "e"]
*/

const string_chop = function(str="", chk=0){
    const numberOfChunks= Math.ceil(str.length/chk)
    let array=[]
    let x=0;
    if (chk==0){array.push(str)} else{
    for (let i = 0;  i < numberOfChunks; i++) {
        array.push( str.substr(x, chk))
        x+=chk
      }
    }
    return array;
}


/*    
5-Write a JavaScript function to truncate a string to a certain length.
	console.log(truncate_string("Robin Singh",4));
		"Robi"
*/
const truncate_string = (str="", size=0)=>str.substr(0,size);


/*    
6- Write a JavaScript function to alphabetize a given string.
	console.log(alphabetize_string('United States'));
		"SUadeeinsttt"
*/
const alphabetize_string=function alphabetize_string(str="") {
   return str.split('').sort().join('').trim();
}
/***************/
// no need to repeat the function name
// const alphabetize_string = function(str="") {
//   return str.split('').sort().join('').trim();
// }
// or in one line with arrow function
// const alphabetize_string = str="" => str.split('').sort().join('').trim();
// }
//
/***************/
/*    
7- Write a JavaScript function to test whether the character at the provided (character) index is lower case.
	console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
		true
*/
// This one is not correct. You should not do -1
const isLowerCaseAt= function (str, place){
    let state=false;
    if (str[place-1]===str[place-1].toLowerCase()) {
        state=true;
    }
    else {
        state=false;
    }
    return state;
}

/***************/
// Possible solution
// const isLowerCaseAt = (str, place) => str[place]===str[place].toLowerCase()
/***************/


//woww - possible answer
function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }



/*    
8-Write a JavaScript function to test whether a string ends with a specified string.
	console.log(endsWith('JS string exercises', 'exercises'));
		true

*/


// You do not need to creat a variabel to hold the boolean value
// Just return the check
const endsWith = function (fullStr, str){
    let state=false; // why it is saying I am not using "state"
    if (fullStr.indexOf(str, fullStr.length-str.length)>-1){
        return state=true
    } else{
        return state=false
    }
}

/***************************
// posible solution
// const endsWith = (fullStr, str) => fullStr.indexOf(str, fullStr.length-str.length)!=-1
****************************/

// OMGGG - another super answer
function endsWith(input, string) {
    var index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}

/*    
9- Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.
	console.log(guid());
		"hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
	console.log(guid(15));
		"b7pwBqrZwqaDrex"
*/
const guid= function (size=32){
    let string="abcdefghijklmnopqrstuvwxyz0123456789"
        alpLen=string.length;

    let result=""

    for (let i=0; i<=size; i++){
     result+=string.charAt(Math.floor(Math.random()*size))
    }
    return result;
}

