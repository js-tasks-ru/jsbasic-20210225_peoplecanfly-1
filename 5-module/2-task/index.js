function toggleText() {
  const text = document.querySelector("#text");
  const toggleFunc = function () {
    !text.hidden ? (text.hidden = true) : (text.hidden = false);
  };

  document
    .querySelector(".toggle-text-button")
    .addEventListener("click", toggleFunc);

  

 

}
