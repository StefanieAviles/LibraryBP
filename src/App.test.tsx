import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn'
import { Home } from './components/Pages/Home'
import { Register } from './components/Pages/Register'

describe('Router function', () => {
  it('Render Login', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <LogIn />
      </Router>
    )
    const textLogin = screen.getByText(/login/i)
    expect(textLogin).toBeInTheDocument()
  })
  it('Render Home', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    )
    const textHome = screen.getByText(/home/i)
    expect(textHome).toBeInTheDocument()
  })
  it('Render Register', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    )
    const textRegister = screen.getByText(/register/i)
    expect(textRegister).toBeInTheDocument()
  })
})
