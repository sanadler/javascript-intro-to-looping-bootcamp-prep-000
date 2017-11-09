function forLoop(array){
  for(i=1; i<26; i++){
    if (i===1){
      array[0] = "I am 1 strange loop."
    }
    else{
      array[i-1] = "I am" + i-1 + "strange loops."
    }
  }
  return array;
}

function whileLoop(n){
  while (n>0){
    console.log(n);
    n--;
  }
  return 'done';
}
