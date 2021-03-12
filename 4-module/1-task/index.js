function makeFriendsList(friends) {
  let ulUserList = document.createElement('ul');
  friends.forEach(user => {
    let liElement = document.createElement('li');
    liElement.innerText = user.firstName + ' ' + user.lastName;
    ulUserList.appendChild(liElement);
  });
  return ulUserList;
}
