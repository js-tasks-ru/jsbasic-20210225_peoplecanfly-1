function factorial(n) {
  if (n != 0 && n != 1){
    let result = n;
    while (n > 1){
      result = result * (n-1);
      --n;
    }
    return result;
  } else {
    return 1;
  }
}
