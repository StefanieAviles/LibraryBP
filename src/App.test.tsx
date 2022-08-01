import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn'
import { Home } from './components/Pages/Home'
import { Register } from './components/Pages/Register'

describe('Router function', () => {
  const navigateFunction = jest.fn()
  const locationFunction = jest.fn()

  it('Render Login', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <LogIn navigateFunction={navigateFunction} locationFunction={locationFunction} />
      </Router>
    )
    const textLogin = screen.getByText(/contrasena/i)
    expect(textLogin).toBeInTheDocument()
  })
  /* it('Render Home', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    )
    const textHome = screen.getByText(/Biblioteca/i)
    expect(textHome).toBeInTheDocument()
  }) */
  it('Render Register', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Register navigateFunction={navigateFunction} locationFunction={locationFunction} />
      </Router>
    )
    const textRegister = screen.getByText(/register/i)
    expect(textRegister).toBeInTheDocument()
  })
})
