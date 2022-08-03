import { FC, InputHTMLAttributes } from 'react'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  labelMessage?: string
}

export const Input: FC<InputProps> = ({ errorMessage, labelMessage, onChange, ...rest }) => {
  const className = rest.className ? rest.className : 'input'
  return (
    <div className={className}>
      <label htmlFor={rest.id} className="input__label">
        {labelMessage}
      </label>
      <input className="input__element" onChange={onChange} {...rest} />
      <span className="input__message-error">{errorMessage}</span>
    </div>
  )
}
