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

 





// var axios  = require('axios');

// const getMovies = async (callback) => {
//     const titanic = await axios.get("http://www.omdbapi.com/?apikey=2e3b4604&s=titanic");
//     const saw = await axios.get("http://www.omdbapi.com/?apikey=2e3b4604&s=saw");
//     const wars = await axios.get("http://www.omdbapi.com/?apikey=2e3b4604&s=wars");
//     callback([...titanic.data.Search,...saw.data.Search,...wars.data.Search]);
// } 

// getMovies(console.log)

