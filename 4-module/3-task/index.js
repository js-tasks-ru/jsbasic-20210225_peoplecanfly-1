function highlight(table) {
 [...table.querySelectorAll('tr')].splice(1)
 .forEach(ApplyStylesForRow) 
 // получаем все строки не включая шапку и проходимся методом forEach по каждой строке
}


//  в каждой строке проходим по каждой ячейке. Так как у каждой ячейки свои проверки получается вот такая...
let ApplyStylesForRow = (row) => {
//  проверка на возраст
  if (+row.cells[1].innerText < 18){
    row.cells[1].parentElement.style.textDecoration = 'line-through'
  } 

  //  Проверка на возраст
  if (row.cells[2].innerText == 'm'){
    row.cells[2].parentElement.className = 'male'
  } else if (row.cells[2].innerText== 'f'){
    row.cells[2].parentElement.className = 'female'
  }
  // проверка наличия dataset 
  if (row.cells[3].dataset.available == 'true'){
    row.cells[3].parentElement.className += ' available'
  } else if (row.cells[3].dataset.available == 'false'){
    row.cells[3].parentElement.className +=' unavailable'
  }else{
    return  row.cells[3].parentElement.hidden = true;
  } 
}

