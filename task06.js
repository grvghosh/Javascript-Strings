
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var string = "grvghoshgmailcom";

console.log(capitalizeFirstLetter(string));
module.exports = capitalizeFirstLetter;
