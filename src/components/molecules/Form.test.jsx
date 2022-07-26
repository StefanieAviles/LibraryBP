import { Form } from '../molecules/Form'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('Form', () => {
  test('should redirect and update history', () => {
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <Form />
      </Router>
    )

    userEvent.click(screen.getByText(/Home/))

    expect(history.location.pathname).toEqual('/home')
  })
})
