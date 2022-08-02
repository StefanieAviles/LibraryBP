import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('should display inner text', async () => {
    render(<Header principalText="Biblioteca"></Header>)
    const TextFound = await screen.findByText('Biblioteca')
    expect(TextFound).toBeDefined()
    expect(TextFound).toHaveTextContent('Biblioteca')
  })
})
