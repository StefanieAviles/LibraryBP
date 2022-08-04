import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { LogIn } from './LogIn'
import { UserService } from '../../../services/user.service'

let navigateFunction: any = null
let localStorage: any = null

//jest.spyOn(localStorage, 'setItem').mockImplementation(() => {})
//global.localStorage = localStorageMock;
describe('LogIn component', () => {
  beforeEach(() => {
    const value = {
      username: 'ksuarez',
      password: 'adm12345'
    }
    jest.spyOn(UserService, 'login').mockResolvedValue(value)
    localStorage = jest.spyOn(Storage.prototype, 'setItem')
    navigateFunction = jest.fn()
    render(<LogIn navigateFunction={navigateFunction} />)
  })
  it('should render with password error', () => {
    const inputPassword = screen.getByPlaceholderText('*****')
    expect(inputPassword).toBeDefined()
    expect(inputPassword).toBeInTheDocument()
    fireEvent.change(inputPassword, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with email error', () => {
    const inputEmail = screen.getByPlaceholderText('Ej. name@example.com')
    expect(inputEmail).toBeDefined()
    expect(inputEmail).toBeInTheDocument()

    fireEvent.change(inputEmail, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with error of login', () => {
    const buttonElement = screen.getByText('Iniciar Sesion')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()
    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(screen.getAllByText('*Campo requerido')[0]).toBeInTheDocument()
  })

  it('should render login successfuly with email and password', async () => {
    const inputEmail = screen.getByPlaceholderText('Ej. name@example.com')
    const inputPassword = screen.getByPlaceholderText('*****')
    const buttonElement = screen.getByText('Iniciar Sesion')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()

    fireEvent.change(inputEmail, { target: { value: 'ksuarez' } })
    fireEvent.change(inputPassword, { target: { value: 'adm12345' } })
    await fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    waitFor(() => {
      expect(navigateFunction).toBeCalledTimes(1)
      expect(localStorage).toBeCalled()
    })
  })
})
