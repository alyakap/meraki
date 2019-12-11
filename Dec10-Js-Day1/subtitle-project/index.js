const fs = require('fs')
const encoder = require('turkish-char-encoding');
/*
execute this file in terminal:  node index ./subtitles
*/

const dirToScan = process.argv[2];
// fs.readdir(dirToScan, 'utf8',function(err,data){ // default in node is ASYNC
//   if(err){

//   }else{
//     console.log(data)
//   }
// })
const paths = fs.readdirSync(process.argv[2],'utf8')
let allText = "";
paths.forEach(function(path){
  allText += fs.readFileSync(dirToScan+"/"+path,'latin1')
})




const allWordsArray = allText
  .trim()
  .toLowerCase()
  .replace(/[0-9:,->?'"!()`�_.&\r?\n|\r]/g, " ")
  .replace(/(color)/g, " ")
  .replace(/(font)/g, " ")
  .replace(/  +/g, " ")
  .split(" ")
  .filter(keepBigWords)
  

 const allUniqueWords = [...new Set(allWordsArray)]
  console.log(allUniqueWords)

 
  function keepBigWords(word){
    return word.length >= 16;
  }
