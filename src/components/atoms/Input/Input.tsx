import { FC, InputHTMLAttributes } from 'react'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  labelMessage?: string
}

export const Input: FC<InputProps> = (props: InputProps) => {
  const className = props.className ? props.className : 'input'
  return (
    <div className={className}>
      <label htmlFor={props.id} className="input__label">
        {props.labelMessage}
      </label>
      <input className="input__element" {...props} />
      <span className="input__message-error">{props.errorMessage}</span>
    </div>
  )
}
