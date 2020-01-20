const productIt = function(product){
    return function(val){
        return val*product
    }
}

const productIt = product => val => val*product;

const arr = [456,456,123,321,32165,41561,6251,65981,561,651,321,324,352,132,132,1231];
const productArr = arr.map(productIt(10))
console.log(productArr)

//other example where we execute directly
const addx = x => nr => nr+x 
const res = add(20)(6)