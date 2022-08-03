import { fireEvent, render, screen } from '@testing-library/react'
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
  /* it('should execute the onchange callback', async () => {
    const onChange = jest.fn()
    render(<Select options={options} onChange={onChange} />)
    const selectFound = await screen.findByText('ONE')
    expect(selectFound).toBeDefined()
    fireEvent.change(selectFound, { target: { value: 'TWO' } })
    expect(onChange).toBeCalledTimes(1)
    expect(selectFound).toHaveValue('TWO')
  }) */
})
