import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should render with placeholder', async () => {
    render(<Input placeholder="nombre" />)
    const inputFound = await screen.findByPlaceholderText('nombre')
    expect(inputFound).toBeDefined()
  })
})
