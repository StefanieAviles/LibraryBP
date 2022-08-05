import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn/LogIn'
import { Home } from './components/Pages/Home/Home'
import { Register } from './components/Pages/Register/Register'
import { BookInfo } from './components/Pages/BookInfo/BookInfo'

describe('Router function', () => {
  const navigateFunction = jest.fn()

  it('Render Login', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <LogIn navigateFunction={navigateFunction} />
      </Router>
    )
    const textLogin = screen.getByText(/Iniciar sesión/i)
    expect(textLogin).toBeInTheDocument()
    /* fireEvent.click(textLogin)
    expect(navigateFunction).toBeCalledTimes(1) */
  })
  it('Render Home', () => {
    const history = createMemoryHistory()
    const setBookById = jest.fn()
    const setSearchValue = jest.fn()
    const setSearchCategoryBook = jest.fn()
    render(
      <Router location={history.location} navigator={history}>
        <Home
          setBookById={setBookById}
          navigateFunction={navigateFunction}
          searchValue={''}
          searchCategoryBook={''}
          setSearchValue={setSearchValue}
          setSearchCategoryBook={setSearchCategoryBook}
        />
      </Router>
    )
    const textHome = screen.getByText(/Biblioteca/i)
    expect(textHome).toBeInTheDocument()
  })
  it('Render Register', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Register navigateFunction={navigateFunction} />
      </Router>
    )
    const textRegister = screen.getByText(/register/i)
    expect(textRegister).toBeInTheDocument()
  })
  it('Render BookInfo', () => {
    const history = createMemoryHistory()
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
    render(
      <Router location={history.location} navigator={history}>
        <BookInfo navigateFunction={navigateFunction} bookById={book} />
      </Router>
    )
    const textRegister = screen.getByText(/volver/i)
    expect(textRegister).toBeInTheDocument()
  })
})
