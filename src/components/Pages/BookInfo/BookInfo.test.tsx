import { fireEvent, render, screen } from '@testing-library/react'
import { BookInfo } from './BookInfo'

describe('LogIn component', () => {
  const navigateFunction = jest.fn()
  const book = {
    id: '2ac4ly00oen',
    public: true,
    author: 'Unknow',
    resume: '',
    title: 'Learning Angular, 2nd Edition',
    subtitle: 'A Hands-On Guide to Angular 2 and Angular 4',
    image: 'https://itbook.store/img/books/9780134576978.png',
    url: 'https://itbook.store/books/9780134576978',
    category: {
      id: '57',
      description: 'action'
    },
    userRegister: 'asghf54555'
  }
  it('should render with password error', () => {
    render(<BookInfo navigateFunction={navigateFunction} bookById={book} />)
    const data = screen.getByText('Learning Angular, 2nd Edition')
    expect(data).toBeDefined()
    expect(data).toBeInTheDocument()
  })

  it('should render with email error', () => {
    render(<BookInfo navigateFunction={navigateFunction} bookById={book} />)
    const button = screen.getByText('Volver')
    expect(button).toBeDefined()
    expect(button).toBeInTheDocument()

    fireEvent(button, new CustomEvent('clickbutton', { detail: '' }))
    expect(navigateFunction).toBeCalledTimes(1)
  })
})
