import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should display inner text', async () => {
    render(<Button>Iniciar Sesion</Button>)
    const buttonFound = await screen.findByText('Iniciar Sesion')
    expect(buttonFound).toBeDefined()
    expect(buttonFound).toHaveTextContent('Iniciar Sesion')
  })
})
