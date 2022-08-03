import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar component', () => {
  const setSearchValue = jest.fn()
  const setSearchCategoryBook = jest.fn()
  it('Render SearchBar', async () => {
    render(
      <SearchBar setSearchValue={setSearchValue} setSearchCategoryBook={setSearchCategoryBook} />
    )
    const searchFound = await screen.findByPlaceholderText('Ej. Angular, React')
    expect(searchFound).toBeDefined()
    expect(searchFound).toBeInTheDocument()
  })
})
