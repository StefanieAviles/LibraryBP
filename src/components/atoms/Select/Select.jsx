export function Select({ options }) {
  return (
    <select>
      {options.map((item, i) => (
        <option value={i} key={i}>
          {item.description}
        </option>
      ))}
    </select>
  )
}
/* import { FC, SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[]
}

export const Select: FC<SelectProps> = (props: SelectProps) => {
  return (
    <select {...props}>
      {props.options.map((item, i) => (
        <option value={i} key={i}>
          {item.description}
        </option>
      ))}
    </select>
  )
} */
