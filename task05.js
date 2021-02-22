function firstletter(str) {
	var string = [];
	var new_str = str.split(" ");
    var a = new_str.length;
for (var i = 0; i < a; i++) {
       string.push(new_str[i].charAt(0));
}
return string.join(" ");
}
var str = "grv ghosh gmail com";
console.log(firstletter(str));
module.exports = firstletter;
