import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import PropTypes from 'prop-types'
import {ThemeProvider} from '@emotion/react'
import {dark} from '../src/themes'

function render(ui, {theme = dark, ...options}) {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }

  Wrapper.propTypes = {
    children: PropTypes?.node,
  }

  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'

//override the built-in render with our own
export {render}
