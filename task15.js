function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return false;
	}
	return str.replace((searchstr + ' '), '');
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

module.exports = remove_first_occurrence;
