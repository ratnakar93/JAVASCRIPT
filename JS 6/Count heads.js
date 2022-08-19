var Count_Occ = (s) => 
{
 let tempArr ='';
 let letters="";
 let count=1;
 for(let i=0;i<s.length;i++){
   for(let j=i+1;j<s.length;j++){
   if(s[i]===s[j]){
     count++;
   }
   }
  if(count>1){
    tempArr=s[i];
    letters=letters+" "+s[i]+count;
    s=s.replace(tempArr,' ');
    s=s.split(tempArr).join('');
  }
  count=1;
 }
 
return letters.split(' ').sort().join('');
};