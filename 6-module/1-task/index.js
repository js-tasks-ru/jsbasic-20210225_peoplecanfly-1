export default class UserTable {
  // элемент дома который потом будет добавлен в html.body.

  constructor(rows) {
    this.users = rows;
    this.elem = document.createElement("table");
    this.#render(); // Функция  которая присваивает финальный ДОМ элемент this.elem
  }

  #headerTableTemplate() {
    return `
    <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    </thead>`;
  }

  #rowsTableTemplate(users) {
    return users.map((user) => this.#rowTemplateCreation(user)).join('');
  }

  #userTableTemplate({ users }) {
    return `
    ${this.#headerTableTemplate()}
    <tbody>
      ${this.#rowsTableTemplate(users)}
    </tbody>
    `;
  }

  #render() {
    const template = this.#userTableTemplate({ users: this.users });
    this.elem.insertAdjacentHTML("afterbegin", template);
    this.elem.addEventListener("click", this.#deleteRow);
  }

  // Функция удления строки в которой была нажата кнопка.
  #deleteRow(event) {
    const target = event.target;
    console.log(target.dataset.action);
    if (target.dataset.action == "remove") {
      target.closest("tr").remove();
    }
  }

  #rowTemplateCreation(user) {
    return `<tr > 
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.salary}</td>
    <td>${user.city}</td>
    <td><button data-action="remove">X</button></td>
    </tr>`;
  }
}
