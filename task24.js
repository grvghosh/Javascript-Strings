
function isPangram(sentence){
   let lowerCased = sentence.toLowerCase();
   for(let char of 'abcdefghijklmnopqrstuvwxyz'){
      if(!lowerCased.includes(char)){
         return false
       }
    }
  return true
}
var sentence = "asdfghjkwertyuioxcvbn sdfghjertyu dfghjcvbnm fghj";
console.log(isPangram(sentence));
module.exports = isPangram;
