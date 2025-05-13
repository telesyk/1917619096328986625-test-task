import {
  handleInputFocus,
  handleTableRowToggle,
  handleTableUpdatesToggle,
  handleTabSwitch,
} from './handlers.js'

const ATTRIBUTE_DATA_CONTROL = 'data-control'

export const onClick = event => {
  const hasAttribute = event.target.hasAttribute(ATTRIBUTE_DATA_CONTROL)
  const eventType = hasAttribute
    ? event.target.getAttribute(ATTRIBUTE_DATA_CONTROL)
    : event.target.parentElement.getAttribute(ATTRIBUTE_DATA_CONTROL)

  switch (eventType) {
    case 'switch-tab':
      handleTabSwitch(event.target)
      return
    case 'trigger-table-filter':
      console.log('trigger-table-filter')
      return
    case 'trigger-export-fm':
      console.log('trigger-export-fm')
      return
    case 'trigger-search':
      console.log('trigger-search')
      return
    default:
      return
  }
}

export const onChange = event => {
  const eventType = event.target.getAttribute(ATTRIBUTE_DATA_CONTROL)

  switch (eventType) {
    case 'toggle-table-row':
      handleTableRowToggle(event.target)
      return
    case 'toggle-table-updates':
      handleTableUpdatesToggle(event.target)
      return
    default:
      return
  }
}

export const onFocus = event => {
  const eventType = event.target.getAttribute(ATTRIBUTE_DATA_CONTROL)

  switch (eventType) {
    case 'toggle-search-focus':
      handleInputFocus(event.target)
      return
    default:
      return
  }
}

export const onBlur = event => {
  const eventType = event.target.getAttribute(ATTRIBUTE_DATA_CONTROL)

  switch (eventType) {
    case 'toggle-search-focus':
      handleInputFocus(event.target, true)
      return
    default:
      return
  }
}
