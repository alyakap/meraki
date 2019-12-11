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

const string_chop = function(str, chk=0){
    const numberOfChunks= Math.ceil(str.lenght/chk)
    let array=[]
    let x=0;
    for (let i = 0;  x < numberOfChunks; i++) {
        x+=chk
        array.push( str.substr(x, chk))
      }
    
    return array;
}

