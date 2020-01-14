function sumStrings(a,b) { 
  let counter=0;
  let arr=[];
  let sum=0;
  let x=a.length;
  let y=b.length;
  (x>y) ? counter=x : counter=y
  for(let i=1 ; i<=counter ; i++){
    sum+=((a[x-i]!==undefined)? parseInt(a[x-i]) : 0) + ((b[y-i]!==undefined)? parseInt(b[y-i]) : 0)
    
      if(sum>9) {
          arr.unshift(sum.toString()[1])
          sum=sum.toString()[0]
          console.log(parseInt(a[i-1]))
          // parseInt(a[x-i+1])+=sum.toString()[0]
          // console.log(sum)
      }
       
      arr.unshift(sum.toString[0])
      sum=0
    
    
  }
  return arr
}

console.log(sumStrings('1234','456'))