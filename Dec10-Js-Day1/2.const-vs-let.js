var status = true;

if(status){
    var age = 38; //should be garbage collected after execusion of if-statement
}



for(var i=1;i<=10;i++){
    console.log(i) //should be garbage collected
}
console.log(i) //this should not exist
// thats why const and let where introduced




console.log(age) // should not exist