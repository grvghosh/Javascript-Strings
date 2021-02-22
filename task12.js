function hiddenchar(string, length, spchar)
{
	
	
	if(string.length>length)
	{
		return(string.slice(0,length) + spchar);
	}
	
	
	
	
	
}
var string = "wertyuioasdfghjklzxcvbnm";
var length = 15;
var spchar = '**********';
console.log(hiddenchar(string, length,spchar));
module.exports = hiddenchar;

