console.log('👻 index.js file loaded')
/* Get Focus on inputs */
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('focus', event => {
    handleInputFocus(event)
  })
  input.addEventListener('blur', event => {
    handleInputFocus(event, true)
  })
})

function handleInputFocus(event, isFocused = false) {
  const { target } = event
  if (isFocused) {
    target.closest('label').classList.remove('is-focused')
    return
  }
  target.closest('label').classList.add('is-focused')
}
