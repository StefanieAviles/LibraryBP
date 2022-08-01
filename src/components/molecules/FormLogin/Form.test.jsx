import { Form } from '../molecules/Form'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('Form', () => {
  const navigateFunction = jest.fn()
  const locationFunction = jest.fn()
  it('Render Form', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Form navigateFunction={navigateFunction} locationFunction={locationFunction} />
      </Router>
    )
    const textForm = screen.getByText(/contrasena/i)
    expect(textForm).toBeInTheDocument()
  })
})
