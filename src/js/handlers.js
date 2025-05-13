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
  console.log(target.type, 'handleTableUpdatesToggle')
}

export const handleTabSwitch = target => {
  if (target.ariaSelected === 'true') return

  const siblings = target.parentElement.children
  const nextTab = document.getElementById(target.getAttribute('aria-controls'))
  const nextTabSiblings = document.querySelectorAll('[role=tabpanel]')

  for (let element of siblings) {
    element.setAttribute('tabindex', '-1')
    element.setAttribute('aria-selected', 'false')
    element.classList.remove('is-active')
  }

  for (const element of nextTabSiblings) {
    element.classList.remove('is-active')
  }

  target.setAttribute('tabindex', '0')
  target.classList.add('is-active')
  target.setAttribute('aria-selected', 'true')
  // console.log(nextTabId, 'handleTabSwitch')
  nextTab.classList.add('is-active')
}
