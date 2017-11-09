function forLoop(array){
  for(i=1; i<26; i++){
    if (i===1){
      array[i] = "I am 1 strange loop"
    }
    else{
      array[i] = "I am" + i + "strange loops"
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
