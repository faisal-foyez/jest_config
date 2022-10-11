import {render, fireEvent} from 'calculator-test-utils'
import React from 'react'
import Calculator from '../calculator'
import {light} from '../themes'

test('renders', () => {
  const {getByText} = render(<Calculator />, {
    theme: light,
  })
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
