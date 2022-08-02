import { render, screen } from '@testing-library/react'
import { DataBook } from './DataBook'

describe('DataBook', () => {
  it('should display inner text', async () => {
    render(<DataBook text="Titulo" info="Esta es la info"></DataBook>)
    const textFound = await screen.findByText('Titulo')
    expect(textFound).toBeDefined()
    expect(textFound).toHaveTextContent('Titulo')
  })
})
