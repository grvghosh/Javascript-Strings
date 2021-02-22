function gfunk(email)
{
	var splitted, part1,part2;
	splitted = email.split("@");
	part1 = splitted[0];
	part2 = splitted[1];
	part1 = part1.slice(0, 4);
	return (part1 + "....@" + part2);
}
var email = "grdfghjv.ghosdfgsh@gmail.com";

console.log(gfunk(email));
module.exports = gfunk;
