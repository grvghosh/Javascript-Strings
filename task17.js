/*
function gfg(s,f) { 
            
          var index = s.lastIndexOf(f);
		  if(index>0)
		  
		  return true;
		  else
		  return false;
 }
var s = "sdfghj dfghj rtyfguio fg"; 
            var f = "fg"; 
console.log(gfg(s,f));
module.exports = gfg;
*/

function solution(str, ending){
  return str.indexOf(ending, str.length - ending.length) !== -1;
}
 console.log(solution("The quick brown fox jumps over the lazy dog", 'the'));
 module.exports = solution;
  
