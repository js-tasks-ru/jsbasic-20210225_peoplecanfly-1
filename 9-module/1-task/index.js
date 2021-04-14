export default  async function promiseClick(button) {
  button.addEventListener('click', (event)=>{
    promise = await event
  })
}
