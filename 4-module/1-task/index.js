function makeFriendsList(friends) {
  const ulUserList = document.createElement('ul');
  friends.forEach(user => {
    const liElement = document.createElement('li');
    liElement.innerText = `${user.firstName} ${user.lastName}`;
    ulUserList.appendChild(liElement);
  });
  return ulUserList;
}
