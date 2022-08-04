import { FC, InputHTMLAttributes } from 'react'
import { ICategory } from '../../../interfaces/interfaces'
import './CheckBox.scss'

interface CheckBoxProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: ICategory
  position: number
  checkedState: boolean[]
  setCheckedState: (value: boolean[]) => void
}

export const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const handleOnChange = (pos: number) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === pos ? !item : item
    )
    props.setCheckedState(updatedCheckedState)
  }
  return (
    <div className="checkBox">
      <input
        type="checkbox"
        value={props.options.id}
        onChange={() => handleOnChange(props.position)}
      ></input>
      <label>{props.options.description}</label>
    </div>
  )
}
