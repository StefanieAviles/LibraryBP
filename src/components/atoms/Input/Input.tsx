import { FC, InputHTMLAttributes } from 'react'
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  labelMessage?: string
}

export const Input: FC<InputProps> = (props: InputProps) => {
  const className = props.className ? props.className : 'input'
  return (
    <div className="inputDiv">
      <label htmlFor={props.id}>{props.labelMessage}</label>
      <input className={className} {...props} />
      <span>{props.errorMessage}</span>
    </div>
  )
}
