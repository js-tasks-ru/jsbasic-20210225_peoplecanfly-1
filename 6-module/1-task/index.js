/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  tableCoreStructure = ` 
  <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  </tbody>`; // корневая структура таблицы
  elem; // элемент дома который потом будет добавлен в html.body.

  constructor(rows) {
    this.table = rows;
    this.#setDomElement(); // Функция  которая присваивает финальный ДОМ элемент this.elem
  }

  // Основная функция которая приваивает свойсту класса elem - готовый DOM элемент таблицы.
  #setDomElement() {
    const domStructure = this.#insertCoreStructureToElem();
    let allRowsTemaplate = "";
    for (let user of this.table) {
      allRowsTemaplate += this.#rowTemplateCreation(user); // верстку наполяем данными из обьекта 
    }
    domStructure
      .querySelector("tbody")
      .insertAdjacentHTML("afterbegin", allRowsTemaplate);
    domStructure.addEventListener("click", this.#deleteRow);
    this.elem = domStructure;
  }

  // Функция удления строки в которой была нажата кнопка.
  #deleteRow(event) {
    const target = event.target;
    if (target.tagName == "BUTTON") {
      target.closest("tr").remove();
    }
  }

  #insertCoreStructureToElem() {
    const domElement = document.createElement("table");
    domElement.innerHTML = this.tableCoreStructure;
    return domElement;
  }

  #rowTemplateCreation(user) {
    return `<tr> 
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.salary}</td>
    <td>${user.city}</td>
    <td><button>X</button></td>
    </tr>`;
  }
}
