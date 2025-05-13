import { onClick, onChange, onFocus, onBlur } from './actions.js'

document.addEventListener('click', onClick)
document.addEventListener('change', onChange)
document.addEventListener('focus', onFocus, true)
document.addEventListener('blur', onBlur, true)
