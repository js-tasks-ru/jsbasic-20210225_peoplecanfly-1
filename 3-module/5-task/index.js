function getMinMax(inputArray){
  inpitArray = inputArray.split(',').join(' ').split(' ')
    .filter(word => isFinite(word) && word != ''? word: null ); 
  return  { min: Math.min(...inpitArray), max: Math.max(...inpitArray) }
}

