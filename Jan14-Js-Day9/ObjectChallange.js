const getRandomRange = (min , max) => Math.floor((Math.random()* (max+1-min))+min); 
const getRandomSport = () => {
    let sports=["swimming", "running", "cycling"]
    return sports[Math.floor(Math.random()* 3)]
}

class Sporter{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.trainingLog=[];
    }
}
class Log{
    constructor(sportsType, distance, time){
        this.sportsType=sportsType;
        this.distance=distance;
        this.time=time;
    }
}


const randomSupporters=[];
for (let i=0; i<=5000; i++){
    randomSupporters.push(new Sporter(`Name${i}`, `Lastname${i}`, Math.floor()))

}



 
console.log(getRandomSport())