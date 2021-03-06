
function camelize (str) {
  let itemsArray = []
  let separatedString = str.split('-');
  for (const item of separatedString){
    if (item.length !== 0 && separatedString[0] !== item){
      itemsArray.push(item[0].toUpperCase() + item.slice(1))
    }else {
      itemsArray.push(item)
    }
  };
   return itemsArray.join('');
}
camelize(str); 
