import { render, screen } from '@testing-library/react'
import { TitleBar } from './TitleBar'

describe('TitleBar', () => {
  it('should display inner text', async () => {
    render(<TitleBar text="Libros" textButton="Agregar" buttonColor="primary" buttonSize="small" />)
    const textFound = await screen.findByText('Libros')
    expect(textFound).toBeDefined()
    expect(textFound).toHaveTextContent('Libros')
  })
})
