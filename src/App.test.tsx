import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn/LogIn'
import { Home } from './components/Pages/Home/Home'
import { Register } from './components/Pages/Register/Register'

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
    const textLogin = screen.getByText(/Iniciar sesión/i)
    expect(textLogin).toBeInTheDocument()
  })
  it('Render Home', () => {
    const history = createMemoryHistory()
    const setBookById = jest.fn()
    const setSearchValue = jest.fn()
    render(
      <Router location={history.location} navigator={history}>
        <Home
          setBookById={setBookById}
          navigateFunction={navigateFunction}
          locationFunction={locationFunction}
          searchValue={''}
          setSearchValue={setSearchValue}
        />
      </Router>
    )
    const textHome = screen.getByText(/Biblioteca/i)
    expect(textHome).toBeInTheDocument()
  })
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
