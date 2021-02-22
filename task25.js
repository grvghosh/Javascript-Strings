module.exports = BinaryMul=(s1,s2) => {
   var a=parseInt(s1);
   var b=parseInt(s2);
   var c=a*b;
   var d=c.toString();

  var ans = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
  return ans.toString(2);

}
