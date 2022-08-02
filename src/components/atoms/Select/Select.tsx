import { FC, SelectHTMLAttributes } from 'react'
import { ICategory } from '../../../interfaces/interfaces'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ICategory[]
}

export const Select: FC<SelectProps> = (props: SelectProps) => {
  return (
    <select {...props}>
      {props.options.map((item, i) => (
        <option value={item.id} key={i}>
          {item.description}
        </option>
      ))}
    </select>
  )
}
