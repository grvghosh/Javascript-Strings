is_Blank =  function(input) {
        if (input.length === 0)
        return "zero";
        else 
        return input.length;
      }
console.log(is_Blank(''));
console.log(is_Blank('abc'));
 module.exports = is_Blank;
  
