const getRandomRange = (min , max) => Math.floor((Math.random()* (max+1-min))+min); 
const getRandomSport = () => {
    let sports=["swimming", "running", "cycling"]
    return sports[Math.floor(Math.random()* 3)]
}
const getRandomLog= ()=>{
    const type = getRandomSport();
        let distance, time;
        switch(type){
            case "swimming":
                distance = getRandomRange(1, 3);
                time = getRandomRange(120, 460);
                break;
            case "running":
                distance=getRandomRange(1, 30);
                time=getRandomRange(30, 240);
                break;
            case "cycling":
                distance=getRandomRange(0, 3);
                time=getRandomRange(120, 460);  
                break;
        } 
        return [type,distance,time]
}

class Sporter{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.trainingLog=[];
    }
    getSwimmingTime(){
        console.log(this)
        return this ? this.filterSport("swimming").reduce((a,c)=>a+c.time,0) : 'user not existing'
    }
    getRunningDistance(){
        return this.filterSport('running').reduce((a,c)=>a+c.distance,0) 
    }
    filterSport(str){
        return this.trainingLog.filter(x=>x.sportsType===str)
    }

}
class Log{
    constructor(sportsType, distance, time){
        this.sportsType=sportsType;
        this.distance=distance;
        this.time=time;
    }
}


const randomSporters=[];
let nrOfSporters = 100;
let i=0;
while(nrOfSporters--){
    randomSporters.push(new Sporter(`Name${i}`, `Lastname${i}`, getRandomRange(16, 60) ))
    for(let j=0; j<getRandomRange(10,20); j++){
        randomSporters[i].trainingLog[j]=new Log(...getRandomLog());
    }
    i++;
}

function validateUser(sporter, funtionName){
    if (sporter){
        switch(funtionName){
            case "SwimmingTime":
                console.log(sporter.filterSport("swimming").reduce((a,c)=>a+c.time,0))
                break;
            case "RunningDistance":
                console.log(sporter.filterSport('running').reduce((a,c)=>a+c.distance,0))
                break;
        } 
    }else{
        console.log("user not existing")
    }
}
validateUser(randomSporters[33], "SwimmingTime")


 
//console.log(JSON.stringify(randomSporters))
  



function sumOfAllDistance(){
    let sum=0;
    for(let i=0; i<randomSporters.length; i++)
    {
        sum+=randomSporters[i].trainingLog.reduce((a,c)=>a+c.distance,0)
    }
    return sum
}
console.log(sumOfRAllDistance())

function sumOfRunningKmAllSporters(){
    let sum=0;
    for(let i=0; i<randomSporters.length; i++)
    {
        sum+=randomSporters[i].trainingLog.filterSport('running').reduce((a,c)=>a+c.distance,0)
    }
    return sum
}
console.log(sumOfAllDistance())


function avgOfRunningSpeedOfAll(){
    let distanceSum=0;
    let timeSum=0;
    for(let i=0; i<randomSporters.length; i++)
    {
        distanceSum+=randomSporters[i].trainingLog.filterSport('running').reduce((a,c)=>a+c.distance,0)
        timeSum+=randomSporters[i].trainingLog.filterSport('running').reduce((a,c)=>a+c.time,0)
    }
    return distanceSum/(timeSum/60);
}

function personWithLongestSwimmingTotalDistance(){
    let sumOfSwimmingDistance=[];
    for(let i=0; i<randomSporters.length; i++)
    {
        sumOfSwimmingDistance.push(randomSporters[i].trainingLog.filterSport('swimming').reduce((a,c)=>a+c.distance,0))
    }
    return randomSporters[sumOfSwimmingDistance.indexOf(Math.max(...sumOfSwimmingDistance))]
}

function sporterWithlongestSwimmingDistance(){
    let biggestSwimmingDistance=[];
    for(let i=0; i<randomSporters.length; i++)
    {
        biggestSwimmingDistance.push(randomSporters[i].trainingLog.filterSport('swimming').sort((a,b)=> b.distance-a.distance)[0]);
    }
    return randomSporters[biggestSwimmingDistance.indexOf(Math.max(...biggestSwimmingDistance))]
}

function fastestCyclist(){
    let cyclingSpeeds=[];
    let cyclingDistance=0
    let cyclingTime=0
    for(let i=0; i<randomSporters.length; i++)
    {
        cyclingDistance=randomSporters[i].trainingLog.filterSport('cycling').reduce((a,c)=>a+c.distance,0)
        cyclingTime=randomSporters[i].trainingLog.filterSport('cycling').reduce((a,c)=>a+c.time,0)
        cyclingSpeeds.push(cyclingDistance/cyclingTime);
    }
    return console.log(randomSporters[cyclingSpeeds.indexOf(Math.max(...cyclingSpeeds))].firstName, Math.max(...cyclingSpeeds))
}

