var person = {
    name: "David",
    age: 39
}

function printNameAndAge() {
    return `Hello ${this.name}, you are ${this.age} years old.`
}


var boundedFunction = printNameAndAge.bind(person)

//printNameAndAge() ==> give errror => this not binded correctly
boundedFunction()