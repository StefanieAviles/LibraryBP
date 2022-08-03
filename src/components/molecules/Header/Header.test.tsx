import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header component', () => {
  it('should render with text', async () => {
    render(<Header principalText="Biblioteca"></Header>)
    const TextFound = await screen.findByText('Biblioteca')
    expect(TextFound).toBeDefined()
    expect(TextFound).toBeInTheDocument()
  })
  it('should render with className', async () => {
    render(<Header principalText="Biblioteca" />)
    const TextFound = await screen.findByText('Biblioteca')
    expect(TextFound).toHaveClass('header__text')
  })
})
