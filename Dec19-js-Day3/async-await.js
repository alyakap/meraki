const waitForNameAfterFiveSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("HANIM")
    },5000)
    setTimeout(function(){
        reject('there has been an error')
    },5000) 
})

//PROMISE WAY
// function greetCertainName(){
//     const greetPrefix = "Hello ";
//     const greetSuffix = ',';
//     waitForNameAfterFiveSeconds.then(name=>{
//         console.log(greetPrefix+name+greetSuffix);
//     })
// }

//ASYNC AWAIT WAY
async function greetCertainName(){
    const greetPrefix = "Hello ";
    const greetSuffix = ',';
    const name = await waitForNameAfterFiveSeconds;
    console.log(greetPrefix+name+greetSuffix);
}


greetCertainName()

