
function insert(main_string, ins_string, pos) {
  
   return main_string.slice(0, pos) + ins_string + " " + main_string.slice(pos);
    }
	var main_string = "Hello World";
	var ins_string = "dfghjk";
	var pos = 5;
	console.log(insert(main_string, ins_string, pos));
	module.exports = insert;
