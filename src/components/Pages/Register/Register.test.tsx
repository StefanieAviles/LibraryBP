import { fireEvent, render, screen } from '@testing-library/react'
import { Register } from './Register'
import { UserService } from '../../../services/user.service'

describe('LogIn component', () => {
  const navigateFunction = jest.fn()
  it('should render with password error', () => {
    render(<Register navigateFunction={navigateFunction} />)
    const inputPassword = screen.getAllByPlaceholderText('*****')
    expect(inputPassword).toBeDefined()
    expect(inputPassword[0]).toBeInTheDocument()

    fireEvent.change(inputPassword[0], { target: { value: '123' } })
    expect(screen.getAllByText('Las Contraseñas deben coincidir')[0]).toBeInTheDocument()
  })

  it('should render with password Confirm error', () => {
    render(<Register navigateFunction={navigateFunction} />)
    const inputPasswordConfirm = screen.getAllByPlaceholderText('*****')
    expect(inputPasswordConfirm).toBeDefined()
    expect(inputPasswordConfirm[1]).toBeInTheDocument()

    fireEvent.change(inputPasswordConfirm[1], { target: { value: '123' } })
    expect(screen.getAllByText('Las Contraseñas deben coincidir')[1]).toBeInTheDocument()
  })

  it('should render with email error', () => {
    render(<Register navigateFunction={navigateFunction} />)
    const inputEmail = screen.getByPlaceholderText('Ej. some@email.com')
    expect(inputEmail).toBeDefined()
    expect(inputEmail).toBeInTheDocument()

    fireEvent.change(inputEmail, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with user error', () => {
    render(<Register navigateFunction={navigateFunction} />)
    const inputUser = screen.getByPlaceholderText('Ej. somebody')
    expect(inputUser).toBeDefined()
    expect(inputUser).toBeInTheDocument()

    fireEvent.change(inputUser, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with error of register', () => {
    render(<Register navigateFunction={navigateFunction} />)
    const buttonElement = screen.getByText('Registrarse')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()

    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(screen.getAllByText('*Campo requerido')[0]).toBeInTheDocument()
  })
})
