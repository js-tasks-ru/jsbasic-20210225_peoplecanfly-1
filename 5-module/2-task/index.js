function toggleText() {
  const text = document.querySelector("#text");
  const toggleFunc = () => text.hidden = !text.hidden
  
  document
    .querySelector(".toggle-text-button")
    .addEventListener("click", toggleFunc);
}
