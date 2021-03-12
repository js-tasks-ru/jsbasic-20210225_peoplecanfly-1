function makeFriendsList(friends) {
  let ulUserList = document.createElement('ul');
  for(let user of friends){
    let liElement = document.createElement('li');
    liElement.innerText = user.firstName + ' ' + user.lastName;
    ulUserList.appendChild(liElement);
  }
  return ulUserList;
}
