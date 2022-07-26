import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Select } from './Select'

describe('Select component', () => {
  const options = [
    { id: '1', description: 'ONE' },
    { id: '2', description: 'TWO' }
  ]
  it('should render option', async () => {
    render(<Select options={options} />)
    const selectFound = await screen.findByText('ONE')
    expect(selectFound).toBeDefined()
    expect(selectFound).toBeInTheDocument()
  })
  xit('should execute the onchange callback', async () => {
    const onChange = jest.fn()
    render(<Select options={options} onChange={onChange} />)
    const selectFound = await screen.findByText('ONE')
    expect(selectFound).toBeDefined()
    fireEvent.change(selectFound, { target: { value: 'TWO' } })
    await waitFor(async () => {
      expect(onChange).toBeCalledTimes(1)
    })
    expect(selectFound).toHaveValue('TWO')
  })
})
