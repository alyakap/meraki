class Animal{
    constructor(name,breed,sound){
        this.name = name;
        this.breed = breed;
        this.sound = sound;
    }
    makeSound(certainSound){
        console.log(`I am a ${this.breed} and I make this ${certainSound} sound: ${this.sound}`)
    }    
}


const animal1 = new Animal("Kitty","Cat","Miauw")
console.log(animal1)


