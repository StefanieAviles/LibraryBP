import { FC, InputHTMLAttributes, useState, useEffect } from 'react'
import { ICategory } from '../../../interfaces/interfaces'
import './CheckBox.scss'

interface CheckBoxProps extends InputHTMLAttributes<HTMLSelectElement> {
  categories: ICategory[]
  setErrorCategories: (value: string) => void
  checkedState: boolean[]
  setCheckedState: (value: boolean[]) => void
  setCategoriesBook: (value: string[]) => void
}

export const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  useEffect(() => {
    props.setCheckedState(new Array(props.categories.length).fill(false))
  }, [props.categories])
  console.log(props.checkedState)
  const handleOnChange = (pos: number) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === pos ? !item : item
    )
    props.setCheckedState(updatedCheckedState)
    let counter = 0
    const arrayCategories = []
    for (let i = 0; i < props.categories.length; i++) {
      if (props.checkedState[i] === true) {
        arrayCategories.push(props.categories[i].id)
        counter++
      }
    }
    props.setCategoriesBook(arrayCategories)
    if (counter < 2) {
      props.setErrorCategories('Elegir al menos 3 categorias')
    } else {
      props.setErrorCategories('')
    }
  }
  return (
    <div className="check-box">
      {props.categories.map((item, index) => (
        <div className="check-box__caterogies" key={index}>
          <input type="checkbox" value={item.id} onChange={() => handleOnChange(index)}></input>
          <label>{item.description}</label>
        </div>
      ))}
    </div>
  )
}
