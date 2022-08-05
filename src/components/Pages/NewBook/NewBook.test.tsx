import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { NewBook } from './NewBook'
import { UserService } from '../../../services/user.service'

const navigateFunction = jest.fn()
const mockBook = {
  id: 'fdgdf122245',
  public: true,
  author: 'somebody',
  resume: 'this is the resume',
  title: 'title',
  subtitle: 'subtitle',
  image: 'some image',
  url: 'some url',
  category: ['category'],
  userRegister: 'user'
}
const isEdited = false
//jest.spyOn(localStorage, 'setItem').mockImplementation(() => {})
//global.localStorage = localStorageMock;
describe('NewBook component', () => {
  beforeEach(() => {
    render(<NewBook navigateFunction={navigateFunction} bookById={mockBook} isEdited={isEdited} />)
  })
  it('should render with title error', () => {
    const inputTitle = screen.getByPlaceholderText('Ej. Angular + NGRX')
    expect(inputTitle).toBeDefined()
    expect(inputTitle).toBeInTheDocument()
    const buttonElement = screen.getByText('Registrar')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()
    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(screen.getAllByText('*Campo requerido')[0]).toBeInTheDocument()
  })

  it('should render with url error', () => {
    const inputUrl = screen.getByPlaceholderText('Ej. https://book.com')
    expect(inputUrl).toBeDefined()
    expect(inputUrl).toBeInTheDocument()
    const buttonElement = screen.getByText('Registrar')
    expect(buttonElement).toBeDefined()
    expect(buttonElement).toBeInTheDocument()
    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))
    expect(screen.getAllByText('*Campo requerido')[1]).toBeInTheDocument()
  })
})
