
function gfg(s,f) { 
            
            var i = 0, 
                n = 0, 
                j = 0; 
  
            while (true) { 
                j = s.indexOf(f, j); 
                if (j >= 0) { 
                    n++; 
                    j++; 
                } else 
                    break; 
            }
return n;			
 }
var s = "sdfghj dfghj rtyfguio fg"; 
            var f = "fg"; 
console.log(gfg(s,f));
module.exports = gfg;


