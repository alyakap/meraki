var name = "David"
console.log(name)

function log(message){
    console.log(message)
}

// module.export.log=log; exporting whole file as object
module.export=log; //exporting just one function
