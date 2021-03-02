function factorial(n) {
  if(n <=1){
    return 1;
  }
  let resultedFactorial = n
  while (n > 1){
    resultedFactorial = resultedFactorial * (n-1);
    --n;
  }
  return resultedFactorial;
}