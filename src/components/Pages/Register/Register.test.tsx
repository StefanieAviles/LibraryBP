import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Register } from './Register'
import { UserService } from '../../../services/user.service'

let navigateFunction: any = null
describe('LogIn component', () => {
  beforeEach(() => {
    const value = {
      name: 'ksuarez',
      email: 'some@gmail.com',
      password: 'adm12345'
    }
    jest.spyOn(UserService, 'createUser').mockResolvedValue(value)
    jest.spyOn(UserService, 'createUser').mockRejectedValue(false)
    navigateFunction = jest.fn()
    render(<Register navigateFunction={navigateFunction} />)
  })
  it('should render with password error', () => {
    const inputPassword = screen.getAllByPlaceholderText('*****')
    expect(inputPassword).toBeDefined()
    expect(inputPassword[0]).toBeInTheDocument()

    fireEvent.change(inputPassword[0], { target: { value: '123' } })
    expect(screen.getAllByText('Las Contraseñas deben coincidir')[0]).toBeInTheDocument()
  })

  it('should render with password Confirm error', () => {
    const inputPasswordConfirm = screen.getAllByPlaceholderText('*****')
    expect(inputPasswordConfirm).toBeDefined()
    expect(inputPasswordConfirm[1]).toBeInTheDocument()

    fireEvent.change(inputPasswordConfirm[1], { target: { value: '123' } })
    expect(screen.getAllByText('Las Contraseñas deben coincidir')[1]).toBeInTheDocument()
  })

  it('should render with email error', () => {
    const inputEmail = screen.getByPlaceholderText('Ej. some@email.com')
    expect(inputEmail).toBeDefined()
    expect(inputEmail).toBeInTheDocument()

    fireEvent.change(inputEmail, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with user error', () => {
    const inputUser = screen.getByPlaceholderText('Ej. somebody')
    expect(inputUser).toBeDefined()
    expect(inputUser).toBeInTheDocument()

    fireEvent.change(inputUser, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with error of register', () => {
    const buttonElement = screen.getByText('Registrarse')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()

    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(screen.getAllByText('*Campo requerido')[0]).toBeInTheDocument()
  })
  it('should render register successfuly with email, username and password', async () => {
    const inputEmail = screen.getByPlaceholderText('Ej. some@email.com')
    const inputPassword = screen.getAllByPlaceholderText('*****')
    const inputUsername = screen.getByPlaceholderText('Ej. somebody')
    const buttonElement = screen.getByText('Registrarse')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()

    fireEvent.change(inputEmail, { target: { value: 'stefanie@gmail.com' } })
    fireEvent.change(inputPassword[0], { target: { value: 'adm12345' } })
    fireEvent.change(inputPassword[1], { target: { value: 'adm12345' } })
    fireEvent.change(inputUsername, { target: { value: 'Stefanie' } })
    await fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    waitFor(() => {
      expect(navigateFunction).toBeCalledTimes(1)
    })
  })
})
