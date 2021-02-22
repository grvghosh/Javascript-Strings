
function charec(string, character, flag){
	var index = string.indexOf(character);
	if(index>=0)
	{
		if(flag == 1)
	return string.slice(0,index);
	else if(flag == 2)
	return string.slice(index+1,string.length);
	
	}
	
	else
	
	return false;
	
}
var string = "sdfghj df$ghj rtyfguio fg";
var character = "$";
var flag = 1;
console.log(charec(string, character, flag));
module.exports = charec;
