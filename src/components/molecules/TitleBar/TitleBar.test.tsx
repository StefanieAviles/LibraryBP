import { render, screen } from '@testing-library/react'
import { TitleBar } from './TitleBar'

describe('TitleBar', () => {
  const navigateFunction = jest.fn()
  it('should display inner text', async () => {
    render(
      <TitleBar
        navigateFunction={navigateFunction}
        text="Libros"
        textButton="Agregar"
        buttonColor="primary"
        buttonSize="small"
      />
    )
    const textFound = await screen.findByText('Libros')
    expect(textFound).toBeDefined()
    expect(textFound).toHaveTextContent('Libros')
  })
})
