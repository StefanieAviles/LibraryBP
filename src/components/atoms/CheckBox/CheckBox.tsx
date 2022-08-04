import { FC, InputHTMLAttributes } from 'react'
import { ICategory } from '../../../interfaces/interfaces'
import './CheckBox.scss'

interface CheckBoxProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: ICategory
  position: number
  checkedState: boolean[]
  setCheckedState: (value: boolean[]) => void
  categories: ICategory[]
  setErrorCategories: (value: string) => void
}

export const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const handleOnChange = (pos: number) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === pos ? !item : item
    )
    props.setCheckedState(updatedCheckedState)
    let counter = 0
    props.setErrorCategories('')
    for (let i = 0; i < props.checkedState.length; i++) {
      if (props.checkedState[i] === true) {
        counter++
      }
    }
    if (counter < 3) {
      props.setErrorCategories('Elegir al menos 3 categorias')
    } else {
      props.setErrorCategories('')
    }
  }
  return (
    <div className="check-box">
      <input
        type="checkbox"
        value={props.options.id}
        onChange={() => handleOnChange(props.position)}
      ></input>
      <label>{props.options.description}</label>
    </div>
  )
}
