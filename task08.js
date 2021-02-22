function swapcase(str) {
var new_str = "";
var a = str.length;
for (var i = 0; i < a; i++) {
if (str[i] === str[i].toLowerCase()) {
new_str += str[i].toUpperCase();
} else {
new_str += str[i].toLowerCase();
}
}
return new_str;
}
var str = "AaBbc";
console.log(swapcase(str));
module.exports = swapcase;
