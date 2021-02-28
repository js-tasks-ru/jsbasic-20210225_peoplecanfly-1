function truncate(str, maxlength) {
  if (str.length > maxlength){
    return str.slice(0,maxlength-1) + "\u{2026}";
  } else {
    return str;
  }
}
