// var inputArray = [1, 2, 3];


// let w=n.toString().split("").map(Number)
// var result = inputArray.reduce(function permute(res, item, key, arr) {
//     return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);}, []);

// console.log(result)



// function isValidWalk(walk) {
//   console.log(walk.join("").replace(/ns/g,'').replace(/we/g,''));
// }
// isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
// isValidWalk(['n','n','n','s','n','s','n','s','n','s']);

function highAndLow(numbers){
  return `${Math.max(numbers.split(' ').map(Number))} ${Math.min(numbers.split(' ').map(Number))}`
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
console.log(Mat("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6".split(' ').map(Number)))