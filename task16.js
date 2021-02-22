
function vowelsCAP(str){
    var str;
    var res=str.split("");
    for(var i=0;i<res.length;i++){
        if(res[i]=="A"|| res[i]=="E" || res[i]=="I" || res[i]=="O" || res[i]=="U"){
          res[i]=res[i];
        }
       else if(res[i]=="a"|| res[i]=="e" || res[i]=="i" || res[i]=="o" || res[i]=="u"){
             res[i] = res[i].toUpperCase();}
        else{
             res[i] = res[i].toLowerCase();}
  } var out = res.join("");
    return out;
 }
 var str = "Learn programming and start earning";
  console.log(vowelsCAP(str));
  module.exports = vowelsCAP;
