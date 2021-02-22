module.exports = incStr=(s,n) => {
   
  var x="";
  for(var i=0;i<s.length;i++)
  {
    if(s[i]==' ')
    {
      x=x+" ";
      continue;
    }
    var a=s.charCodeAt(i);

    a=a+n;
    if(a>122){
      x=x+String.fromCharCode(a%122 +96);
      
    }  
      else{

    x=x+String.fromCharCode(a);
      }

  }
return x;
}
