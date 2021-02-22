
 
function task18(str, rotations) {
    // convert second argument: extract single rotations and convert to signed offsets
    rotations = rotations.replace(/R\s*/g, "-").match(/-?\d/g).map(Number);
    
    // Make a naive check to exclude rotation strings that are too long
    if (rotations.length > str.length) return "NO"; // too many characters will be selected

    // Register at which indexes a character occurs (as there may be duplicate characters)
    let occurrences = Object.fromEntries(Array.from(str, c => [c, []]));
    Array.from(str, (c, i) => occurrences[c].push(i)); 
    // Count characters in str so to be able to detect a "NO" sooner.
    let available = Object.fromEntries(Array.from(str, c => [c, occurrences[c].length]));

    // Don't actually rotate the string, but maintain a current index
    let current = 0;
    let result = []; // The selected characters
    for (let rot of rotations) {
        let c = str[current = (current + str.length + rot) % str.length];
        if (!available[c]--) return "NO"; // too many of the same character
        result.push(c);
    }

    // Reorder characters, so those which have the least available occurrences
    //  in the input string come first.
    // This will optimise the depth first search for an anagram.
    result.sort((a, b) => available[a] - available[b]);

    // Perform a depth-first search for an anagram match
    return (function dfs(i=0, first=str.length, last=-1) {
        // first/last are the extreme indexes in str that have been matched
        if (last - first >= result.length) return false; // subsequence will have gaps; backtrack
        if (i >= result.length) return true; // all characters are allocated in a subsequence
        let c = result[i];
        let occ = occurrences[c];
        let usedoccurrences = occ.length - available[c];
        for (let j = 0; j <= available[c]; j++) {
            if (dfs(i+1, Math.min(first, occ[j]), Math.max(last, occ[j+usedoccurrences-1]))) {
                return true;
            }
        }
        return false; // backtrack
    })() ? "YES" : "NO"; // immediately invoke dfs: returns a boolean
}
console.log(task18("linkinpark", "L 6 R 5 L 4"));
module.exports = task18;
