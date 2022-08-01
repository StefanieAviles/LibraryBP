import { FC } from 'react'

export interface InputProps {
  name: string
  placeholder?: string
  type?: 'password' | 'text'
  functionSet?: (value: string) => void
  value?: string
}

export const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => props.functionSet?.(e.target.value)}
    ></input>
  )
}
