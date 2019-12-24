const people=[
    {id:1, name:"Hanim", lastname:"Kapusuz"},
    {id:2, name:"David", lastname:"Verhulst"},
    {id:3, name:"Askim", lastname:"Kintziger"},
    {id:4, name:"Samira", lastname:"Hamdaoui"},
    {id:5, name:"Murat", lastname:"Kapusuz"},
    {id:6, name:"Zeynep", lastname:"Ilhan"}
]
module.exports=people;

//even if we create array like above postman turns this into json so if I need to post new object in this array it needs to be like this:
//{"id":6, "name":"Zeynep", "lastname":"Ilhan"}
