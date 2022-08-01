import { Input } from '../../atoms/Input/Input'
import { Select } from '../../atoms/Select/Select'
import { useState, useEffect } from 'react'
import { booksByCategory } from '../../../Funciones/Funciones'
import './SearchBar.css'

export function SearchBar() {
  const [searchBook, setUserSearchBook] = useState('')
  const [categories, setCategories] = useState([])
  useEffect(() => {
    booksByCategory(setCategories)
  }, [])
  return (
    <section className="containerSearch">
      <div className="divSearch1">
        <Input placeholder="Ej. Angular, React" functionSet={setUserSearchBook} role="text"></Input>
      </div>
      <div className="divSearch2">
        <Select functioSet={setUserSearchBook} set={searchBook} options={categories}></Select>
      </div>
    </section>
  )
}
