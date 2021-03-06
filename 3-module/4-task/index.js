function showSalary(users,age){
  let user_result = ''
  
  for (const user of users){
    if (user_result=='' && user.age <= age){
      user_result += `${user.name}, ${user.balance}`
      //  из-за этого переноса строки который нужно учесть получается что повторяю код... 
    }else if(user.age <= age){ 
       user_result += `\n${user.name}, ${user.balance}`
    }
  }
  return user_result
}

//  из-за этого переноса строки который нужно учесть получается что повторяю код.