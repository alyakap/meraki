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
        return this.filterSport("swimming").reduce((a,c)=>a+c.time,0) 
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




 
console.log(JSON.stringify(randomSporters))

console.log(  randomSporters[33].getSwimmingTime() )
console.log(  randomSporters[33].getRunningDistance())
console.log(  randomSporters[33].trainingLog.reduce((a,c)=>a+c.time,0))

function sumOfAllDistance(){
    let sum=0;
    for(let i=0; i<randomSporters.length; i++)
    {
        sum+=randomSporters[i].trainingLog.reduce((a,c)=>a+c.distance,0)
    }
    return sum
}
console.log(sumOfAllDistance())
