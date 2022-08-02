import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input component', () => {
  it('should render with placeholder', async () => {
    render(<Input placeholder="nombre" />)
    const inputFound = await screen.findByPlaceholderText('nombre')
    expect(inputFound).toBeDefined()
    expect(inputFound).toBeInTheDocument()
  })

  it('should render with className', async () => {
    render(<Input placeholder="nombre" className="input input--error" />)
    const inputFound = await screen.findByPlaceholderText('nombre')
    expect(inputFound).toHaveClass('input--error')
  })

  it('should execute the onchange callback', async () => {
    const onChange = jest.fn()
    render(<Input placeholder="nombre" onChange={onChange} />)
    const inputFound = await screen.findByPlaceholderText('nombre')
    expect(inputFound).toBeDefined()
    fireEvent.change(inputFound, { target: { value: '23' } })
    expect(onChange).toBeCalledTimes(1)
    expect(inputFound).toHaveValue('23')
  })
})
