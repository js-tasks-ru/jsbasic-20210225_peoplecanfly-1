function makeDiagonalRed(table) {
  return [...table.rows].forEach((item,index) => item.children[index].style.backgroundColor = 'red')
}
