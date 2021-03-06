function namify(users) {
    let user_array = []
    for(let user_name of users){
      user_array.push(user_name.name)
    }
    return user_array
}