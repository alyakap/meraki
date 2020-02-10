const movieData = [
    {
        id:"123",
        title:"Titanic",
        description:"super long description about Titanic movie"
    },
    {
        id:"789",
        title:"Star wars",
        description:"super long description about Star wars movie"
    },
    {
        id:"987",
        title:"EX-Machina",
        description:"super long description about ex-machina movie"
    },
    {
        id:"654",
        title:"Home Alone",
        description:"super long description about home alone movie"
    }
]
const waitForFiveSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('it has been resolved after 5 seconds')
    },5000)
    setTimeout(function(){
        reject('there has been an error')
    },5000) 
})

const waitForMovies = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve(movieData)
    },2345)
})

const noWait = new Promise((resolve,reject)=>resolve('finished noWait'))




// waitForFiveSeconds
//     .then((data)=>{console.log(data)})
//     .catch((data)=>{console.log(data)})

// waitForMovies
//     .then((data)=>{console.log(data)})
//     .catch((data)=>{console.log(data)})

// noWait
//     .then((data)=>{console.log(data)})
//     .catch((data)=>{console.log(data)})

// wait for all all of them to fullfil
// Promise.all([waitForFiveSeconds,waitForMovies,noWait])
//     .then(data=>{console.log(data)})


//getting the fastest response
Promise.race([waitForFiveSeconds,waitForMovies,noWait])
    .then(data=>{console.log(data)})