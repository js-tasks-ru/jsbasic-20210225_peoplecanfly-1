function sumSalary(salaries) {
  let totalSalary = 0;
  for (const salaryItem in salaries){
    if (isFinite(salaries[salaryItem])){
      totalSalary += salaries[salaryItem]
    }  
  }
  return totalSalary;
}
  


