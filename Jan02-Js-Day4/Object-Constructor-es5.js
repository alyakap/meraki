const Animal = function(name,breed,sound){
    this.name = name;
    this.breed = breed;
    this.sound = sound;
}
const makeSound = function(certainSound){
    console.log(`I am a ${this.breed} and I make this ${certainSound} sound: ${this.sound}`)
}


const animal1 = new Animal('Kitty',"Cat","Miauw");
const animal2 = new Animal('Tosca',"Dag","Waf");


const animal1MakeSoundMethod = makeSound.bind(animal1)

makeSound.call(animal1,["funny"])




//.bind() =>returns a new function with the this pointing to a fixed instance
.call()
.apply()










//3 ways to create an Animal instance

// const animal1 = new Animal("Kitty","Cat")
// console.log(animal1)

// const animal2 = Object.create(animal1)
// console.log(animal2)

// const animal3 = Object.assign(animal1)
// console.log(animal3)


