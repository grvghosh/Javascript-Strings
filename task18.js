
function isUpperCaseAt(str,indx) {
    var str = str.split("");
	if(str[indx] === str[indx].toLowerCase())
	return true;
	else
	return false;
}
var str = "sdfghjklertyuioxcvbnm";
var indx = 7;
console.log(isUpperCaseAt(str,indx));
module.exports = isUpperCaseAt;
