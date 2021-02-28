function checkSpam(str) {
  str = str.toLowerCase();
  let spam = 'xxx';
  let spam1 = '1xbet';
  return str.includes(spam) || str.includes(spam1) 
}
