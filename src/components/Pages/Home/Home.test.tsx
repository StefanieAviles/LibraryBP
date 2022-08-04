import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from './Home'
import { UserService } from '../../../services/user.service'

describe('LogIn component', () => {
  const navigateFunction = jest.fn()
  const setBookById = jest.fn()
  const setSearchValue = jest.fn()
  const setSearchCategoryBook = jest.fn()
  it('should render with header', () => {
    render(
      <Home
        setBookById={setBookById}
        navigateFunction={navigateFunction}
        searchValue=""
        searchCategoryBook=""
        setSearchValue={setSearchValue}
        setSearchCategoryBook={setSearchCategoryBook}
      />
    )
    const text = screen.getByText('Biblioteca')
    expect(text).toBeDefined()
    expect(text).toBeInTheDocument()
  })

  it('should render with title', () => {
    render(
      <Home
        setBookById={setBookById}
        navigateFunction={navigateFunction}
        searchValue=""
        searchCategoryBook=""
        setSearchValue={setSearchValue}
        setSearchCategoryBook={setSearchCategoryBook}
      />
    )
    const title = screen.getByText('Tus Libros')
    expect(title).toBeDefined()
    expect(title).toBeInTheDocument()
  })
})
