//1)
const is_blank = s => s ? true : false;

//2)
const protect_email = function(email){
    const parts = email.split('@'); // [0] => "robin_singh", [1] => "example.com"
    const firstPart = parts[0].substr(0,5);
    return firstPart+"...@"+parts[1]
}

//3)

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
const truncate_string = function(str="", size=0){
    
    return str.substr(0,size);

}
/*    
6- Write a JavaScript function to alphabetize a given string.
	console.log(alphabetize_string('United States'));
		"SUadeeinsttt"
*/
const alphabetize_string=function alphabetize_string(str="") 
{
return str.split('').sort().join('').trim();
}
/*    
7- Write a JavaScript function to test whether the character at the provided (character) index is lower case.
	console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
		true
*/

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
//woww - possible answer
function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }



/*    
8-Write a JavaScript function to test whether a string ends with a specified string.
	console.log(endsWith('JS string exercises', 'exercises'));
		true

*/
const endsWith= function (fullStr, str){
    let state=false;
    if (fullStr.indexOf(str, fullStr.length-str.length)>-1){
        return state=true
    } else{
        return state=false
    }
}

