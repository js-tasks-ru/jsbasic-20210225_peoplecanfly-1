function showSalary(users,age){
  return users.filter(user => user.age <= age)
  .map((user,index,array) => index != array.length-1? `${user.name}, ${user.balance}\n`: `${user.name}, ${user.balance}`).join('')
}

//  из-за этого переноса строки который нужно учесть получается что повторяю код.

// for (const user of users){
  //   if (userResult=='' && user.age <= age){
  //     user_result += `${user.name}, ${user.balance}`
  //     //  из-за этого переноса строки который нужно учесть получается что повторяю код... 
  //   }else if(user.age <= age){ 
  //      userResult += `\n${user.name}, ${user.balance}`
  //   }
  // }
  // return user_result

  