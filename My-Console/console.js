// var inputArray = [1, 2, 3];


// let w=n.toString().split("").map(Number)
// var result = inputArray.reduce(function permute(res, item, key, arr) {
//     return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);}, []);

// console.log(result)

function nextBigger(n){
  let w=n.toString().split("").map(Number)
  let v1=w.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);}, []);
  let v2=v1.map(x=>parseInt(x.join(""))).sort((a,b)=>b-a)
    let ind=v2.indexOf(n)-1
    
    return v2[ind];
 
}
console.log(nextBigger(531))