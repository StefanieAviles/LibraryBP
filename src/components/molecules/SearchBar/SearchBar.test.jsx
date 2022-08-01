import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar view', () => {
  it('Render SearchBar', () => {
    const view = render(<SearchBar />)
    screen.getByPlaceholderText('Ej. Angular, React')
    expect(view).toBeDefined()
  })
})
