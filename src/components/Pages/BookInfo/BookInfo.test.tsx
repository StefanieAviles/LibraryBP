import { fireEvent, render, screen } from '@testing-library/react'
import { BookInfo } from './BookInfo'

describe('LogIn component', () => {
  const navigateFunction = jest.fn()
  const setIsEdited = jest.fn()
  const book = {
    id: '2ac4ly00oen',
    public: true,
    author: 'Unknow',
    resume: '',
    title: 'Learning Angular, 2nd Edition',
    subtitle: 'A Hands-On Guide to Angular 2 and Angular 4',
    image: 'https://itbook.store/img/books/9780134576978.png',
    url: 'https://itbook.store/books/9780134576978',
    category: [],
    userRegister: 'asghf54555'
  }
  it('should render with password error', () => {
    render(
      <BookInfo navigateFunction={navigateFunction} bookById={book} setIsEdited={setIsEdited} />
    )
    const data = screen.getByText('Learning Angular, 2nd Edition')
    expect(data).toBeDefined()
    expect(data).toBeInTheDocument()
  })

  it('should render with email error', () => {
    render(
      <BookInfo navigateFunction={navigateFunction} bookById={book} setIsEdited={setIsEdited} />
    )
    const button = screen.getByText('Volver')
    expect(button).toBeDefined()
    expect(button).toBeInTheDocument()

    const buttonEdit = screen.getByText('Editar')
    expect(buttonEdit).toBeDefined()
    expect(buttonEdit).toBeInTheDocument()

    fireEvent(button, new CustomEvent('clickbutton', { detail: '' }))
    expect(navigateFunction).toBeCalledTimes(1)

    fireEvent(buttonEdit, new CustomEvent('clickbutton', { detail: '' }))
    expect(setIsEdited).toBeCalledTimes(1)
  })
})
