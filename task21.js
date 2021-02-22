
function lowercase(string)
{
	var new_array = [];
	var str = string.split("");
	for(let i = 0; i< str.length; i++)
	{
		new_array.push(str[i].toLowerCase());
	}
	
	return new_array.join("");
	
	}
	
	 var string = "fgDFGdfghFGfghj"; 
console.log(lowercase(string));
module.exports = lowercase;
