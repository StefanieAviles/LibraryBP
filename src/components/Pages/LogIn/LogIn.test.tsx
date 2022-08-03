import { fireEvent, render, screen } from '@testing-library/react'
import { LogIn } from './LogIn'
import { Input } from '../../atoms/Input/Input'

describe('LogIn component', () => {
  const navigateFunction = jest.fn()

  it('should render with password error', async () => {
    render(<LogIn navigateFunction={navigateFunction} />)
    const inputPassword = await screen.getByPlaceholderText('*****')
    expect(inputPassword).toBeDefined()
    expect(inputPassword).toBeInTheDocument()

    fireEvent.change(inputPassword, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with email error', async () => {
    render(<LogIn navigateFunction={navigateFunction} />)
    const inputPassword = await screen.getByPlaceholderText('Ej. name@example.com')
    expect(inputPassword).toBeDefined()
    expect(inputPassword).toBeInTheDocument()

    fireEvent.change(inputPassword, { target: { value: '123' } })
    expect(screen.getByText('Minimo 5 caracteres')).toBeInTheDocument()
  })

  it('should render with error of login', async () => {
    render(<LogIn navigateFunction={navigateFunction} />)
    const buttonElement = await screen.getByText('Iniciar Sesion')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()

    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(screen.getAllByText('*Campo requerido')[0]).toBeInTheDocument()
  })

  /* it('should render with className', async () => {
    render(<LogIn navigateFunction={navigateFunction} />)
    const labelFound = await screen.findByText('Contraseña')
    expect(labelFound).toHaveClass('input__label')
  }) */
})
