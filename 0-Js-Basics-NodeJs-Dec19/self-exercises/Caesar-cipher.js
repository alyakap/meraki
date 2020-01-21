/*
Caesar Cipher: An earlier encryption technique which used to
substitute the current alphabets with alphabet after a number of count.
*/
const ceaserEncri=(str, shiftNumber)=>{
    const alphabet="abcdefghijklmnopqrstuwxyz"
    let shiftedStr=""
    for (let i=0; i<str.length; i++){
        let placeIndex = alphabet.indexOf(str[i]);
        shiftedStr+=alphabet[placeIndex+shiftNumber];
        
    }
    return shiftedStr;
}