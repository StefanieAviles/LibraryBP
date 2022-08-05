import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { TitleBar } from './TitleBar'

const navigateFunction = jest.fn()
const setIsEdited = jest.fn()
describe('TitleBar', () => {
  beforeEach(() => {
    render(
      <TitleBar
        navigateFunction={navigateFunction}
        text="Libros"
        textButton="Agregar"
        buttonColor="primary"
        buttonSize="small"
        setIsEdited={setIsEdited}
      />
    )
  })

  it('should display inner text', async () => {
    const textFound = await screen.findByText('Libros')
    expect(textFound).toBeDefined()
    expect(textFound).toHaveTextContent('Libros')
  })
  it('should render Title bar when click the button', async () => {
    const buttonElement = screen.getByText('Agregar')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()

    await fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(navigateFunction).toBeCalledTimes(1)
  })
})
