import { fireEvent, render, screen } from '@testing-library/react'
import { LogIn } from './LogIn'
import { Input } from '../../atoms/Input/Input'

describe('LogIn component', () => {
  const navigateFunction = jest.fn()
  it('should render with placeholder', async () => {
    render(<LogIn navigateFunction={navigateFunction} />)
    const labelFound = await screen.findByText('Contraseña')
    expect(labelFound).toBeDefined()
    expect(labelFound).toBeInTheDocument()
  })
  it('should render with className', async () => {
    render(<LogIn navigateFunction={navigateFunction} />)
    const labelFound = await screen.findByText('Contraseña')
    expect(labelFound).toHaveClass('input__label')
  })
})
