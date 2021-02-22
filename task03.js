function gfunk(string, value)
{
	
	var res = string.slice(0, value);
	return res;
}
var string = "chacha vidhayak hai humare";
var value = 12;
console.log(gfunk(string, value));
module.exports = gfunk;
