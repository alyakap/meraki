function toCamelCase(str){
  //str[1]
  if(str==="") {
   return "";
  } else{
    let a=str.split(/[-_]+/)[0][0].toLowerCase()+str.split(/[-_]+/)[0].slice(1,str.length-1)
    let b=str.split(/[-_]+/).slice(1, str.length-1)
    return a+b.map(x=>x[0].toUpperCase()+x.slice(1,x.length)).join('')
  }
  
}
console.log(toCamelCase("the_stealth_warrior"))