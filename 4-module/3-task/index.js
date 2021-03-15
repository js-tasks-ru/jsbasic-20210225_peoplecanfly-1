function highlight(table) {
  [...table.querySelectorAll("tr")].forEach((row, index) => {
    if (index === 0) {
      return;
    }
    applyStylesForRow(row);
  });
}

const addLineThroughIfNeeded = (row) => {
  if (+row.cells[1].innerText < 18) {
    row.style.textDecoration = "line-through";
  }
};

const addAgeClassIfNeeded = (row) => {
  if (row.cells[2].innerText == "m") {
    row.classList.add("male");
  } else if (row.cells[2].innerText == "f") {
    row.classList.add("female");
  }
};

const addAvailableStatusClassIfNeeded = (row) => {
  if (row.cells[3].dataset.available == "true") {
    row.classList.add("available");
  } else if (row.cells[3].dataset.available == "false") {
    row.classList.add("unavailable");
  } else {
    row.hidden = true;
  }
};


const applyStylesForRow = (row) => {
  addLineThroughIfNeeded(row);
  addAgeClassIfNeeded(row);
  addAvailableStatusClassIfNeeded(row);
};
