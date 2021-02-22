function repeat(string,n){
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(string);
}

return(arr.join(""));
}
var string = "grvghosh";
var n = 5;
console.log(repeat(string,n));
module.exports = repeat;
