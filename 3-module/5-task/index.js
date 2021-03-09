function getMinMax(inputArray){
  let numbersOnly = inputArray.split(',').join(' ').split(' ')
    .filter(word => word !== '' && isFinite(word));

  return  { min: Math.min(...numbersOnly), max: Math.max(...numbersOnly) }
}

