var Game_Winner = (S) => 
{
  let CountA=0,CountD=0
  for(let i=0;i<S.length;i++){
    if(S.charAt(i)=='A'){
      CountA+=1
    }
    if(S.charAt(i)=='D'){
      CountD+=1
    }
  }
  if(CountA > CountD){
    return 'Aditya'
  }
  else if(CountA<CountD){
    return 'Danish'
  }
  else{
    return 'Draw'
  }
}
