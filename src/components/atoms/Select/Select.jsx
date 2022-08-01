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
/* import { FC, useEffect, useRef } from 'react'

export interface SelectProps {
  options?: object
}

export const Select: FC<SelectProps> = (props: SelectProps) => {
  return (
    <select>
      {props.options.map((item, i) => (
        <option value={i} key={i}>
          {item.description}
        </option>
      ))}
    </select>
  )
} */
