import { render, screen } from '@testing-library/react'
import { DataBook } from './DataBook'

describe('DataBook component', () => {
  it('should render with text', async () => {
    render(<DataBook text="Titulo" info="Esta es la info"></DataBook>)
    const textFound = await screen.findByText('Titulo')
    expect(textFound).toBeDefined()
    expect(textFound).toHaveTextContent('Titulo')
  })
  it('should render with className', async () => {
    render(<DataBook text="Titulo" info="Esta es la info" />)
    const textFound = await screen.findByText('Titulo')
    expect(textFound).toHaveClass('dataBook__item')
  })
})
