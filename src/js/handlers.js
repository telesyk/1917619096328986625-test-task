export const handleInputFocus = (target, isFocused = false) => {
  if (isFocused) {
    target.closest('label').classList.remove('is-focused')
    return
  }
  target.closest('label').classList.add('is-focused')
}

export const handleTableRowToggle = target => {
  const parentElement = target.closest('tr')
  const isActive = parentElement.className.includes('is-active')

  isActive
    ? parentElement.classList.remove('is-active')
    : parentElement.classList.add('is-active')
}

export const handleTableUpdatesToggle = target => {
  console.log(target, 'handleTableUpdatesToggle')
}

export const handleTabSwitch = target => {
  console.log(target, 'handleTabSwitch')
}
