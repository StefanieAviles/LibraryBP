import { FC, useState, useEffect } from 'react'
import { Input } from '../../atoms/Input/Input'
import { Header } from '../../molecules/Header/Header'
import { UserService } from '../../../services/user.service'
import { ICategory } from '../../../interfaces/interfaces'
import { CheckBox } from '../../atoms/CheckBox/CheckBox'
import './NewBook.scss'

export interface NewBookProps {
  navigateFunction: (value: string) => void
}
export const NewBook: FC<NewBookProps> = (props: NewBookProps) => {
  const [nameBook, setNameBook] = useState('')
  const [urlBook, setUrlBook] = useState('')
  const [resumeBook, setResumeBook] = useState('')
  const [authorBook, setAuthorBook] = useState('')
  const [imageBook, setImageBook] = useState('')
  const [errorNameBook, setErrorNameBook] = useState('')
  const [errorImageBook, setErrorImageBook] = useState('')
  const [categories, setCategories] = useState<ICategory[]>([])
  const [checkedState, setCheckedState] = useState<boolean[]>([])
  const [errorCategories, setErrorCategories] = useState('')
  useEffect(() => {
    UserService.booksByCategory().then((response: ICategory[]) => {
      if (response.length > 0) {
        setCategories(response)
        setCheckedState(new Array(categories.length).fill(false))
      }
    })
  }, [])
  console.log(checkedState)
  return (
    <section className="newBook">
      <Header principalText="Biblioteca"></Header>
      <h2 className="newBook__title">Registro Libro</h2>
      <section className="newBook__container-inputs">
        <div className="newBook__inputs">
          <Input
            placeholder="Ej. Angular + NGRX"
            labelMessage="Nombre del Libro:"
            type="text"
            onChange={(ev) => setNameBook(ev.currentTarget.value)}
            name="nameBook"
            id="nameBook"
            errorMessage={errorNameBook}
          ></Input>
          <Input
            placeholder="Ej. https://book.com"
            labelMessage="URL del Libro:"
            type="text"
            onChange={(ev) => setUrlBook(ev.currentTarget.value)}
            name="urlBook"
            id="urlBook"
          ></Input>
          <Input
            placeholder="Ej. some resume of the book"
            labelMessage="Resumen del Libro:"
            type="textArea"
            onChange={(ev) => setResumeBook(ev.currentTarget.value)}
            name="resumeBook"
            id="resumeBook"
          ></Input>
        </div>
        <div>
          <Input
            placeholder="Ej. somebody"
            labelMessage="Nombre del autor:"
            type="text"
            onChange={(ev) => setAuthorBook(ev.currentTarget.value)}
            name="authorBook"
            id="authorBook"
          ></Input>
          <Input
            placeholder="Ej. https://book.jpeg"
            labelMessage="Imagen de portada:"
            type="text"
            onChange={(ev) => setImageBook(ev.currentTarget.value)}
            name="imageBook"
            id="imageBook"
            errorMessage={errorImageBook}
          ></Input>
        </div>
      </section>
      <h2 className="newBook__title">Categorias</h2>
      <section className="newBook__container-checkbox">
        {categories.map((item, index) => (
          <CheckBox
            options={item}
            position={index}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            categories={categories}
            setErrorCategories={setErrorCategories}
          ></CheckBox>
        ))}
      </section>
      <span>{errorCategories}</span>
    </section>
  )
}
