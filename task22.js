 function solution(str, ending){
  return str.toLowerCase().includes(ending.toLowerCase());
}
 console.log(solution("The quick brown fox jumps over the lazy dog", 'the'));
 module.exports = solution;
  
