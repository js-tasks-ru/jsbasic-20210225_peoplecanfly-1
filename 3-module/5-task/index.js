function getMinMax(inputArray){
  let tempArray = inputArray.split(','); // Сначала сплит по запятым что бы избавится от заятых
  tempArray = tempArray.join(' '); // обьединение обратно в строку что бы повтороно разбить на элементы только уже по пробелу (т.к заяптых уже нет остались только пробелы)
  tempArray = tempArray.split(' ');

  tempArray = tempArray.map(function(item){
    if(isFinite(item) && item != ''){
      return +item;
    } return null;
  })

  // обьект с результатами 
  const maxMinObj ={
    max: null,
    min: null,
  }

  maxMinObj.max = Math.max.apply(null, tempArray);
  maxMinObj.min = Math.min.apply(null, tempArray);

  return maxMinObj;
}

