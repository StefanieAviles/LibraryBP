import { FC, useState, useEffect } from 'react'
import { Input } from '../../atoms/Input/Input'
import { Header } from '../../molecules/Header/Header'
import { UserService } from '../../../services/user.service'
import { ICategory, Book } from '../../../interfaces/interfaces'
import { CheckBox } from '../../atoms/CheckBox/CheckBox'
import { Button } from '../../atoms/Button/Button'
import './NewBook.scss'

export interface NewBookProps {
  navigateFunction: (value: string) => void
  bookById: Book
  isEdited: boolean
}
export const NewBook: FC<NewBookProps> = (props: NewBookProps) => {
  const [nameBook, setNameBook] = useState<string>('')
  const [urlBook, setUrlBook] = useState('')
  const [resumeBook, setResumeBook] = useState('')
  const [authorBook, setAuthorBook] = useState('')
  const [imageBook, setImageBook] = useState('')
  const [errorNameBook, setErrorNameBook] = useState('')
  const [errorImageBook, setErrorImageBook] = useState('')
  const [errorAuthorBook, setErrorAuthorBook] = useState('')
  const [errorUrlBook, setErrorUrlBook] = useState('')
  const [errorResumeBook, setErrorResumeBook] = useState('')
  const [categories, setCategories] = useState<ICategory[]>([])
  const [checkedState, setCheckedState] = useState<boolean[]>([])
  const [errorCategories, setErrorCategories] = useState('Debe elegir al menos 3 categorias')
  const [categoriesBook, setCategoriesBook] = useState<string[]>([])

  useEffect(() => {
    UserService.booksByCategory().then((response: ICategory[]) => {
      if (response.length > 0) {
        setCategories(response)
        setCheckedState(new Array(categories.length).fill(false))
      }
    })
    if (props.isEdited) {
      setNameBook(props.bookById.title)
      setUrlBook(props.bookById.url)
      setResumeBook(props.bookById.resume)
      setAuthorBook(props.bookById.author)
      setImageBook(props.bookById.image)
    } else {
      setNameBook('')
      setUrlBook('')
      setResumeBook('')
      setAuthorBook('')
      setImageBook('')
    }
  }, [props.isEdited])
  const handleSubmitCancel = () => {
    props.navigateFunction('/home')
  }
  const handleSubmitUpload = async () => {
    if (nameBook && imageBook && errorCategories === '' && authorBook && urlBook && resumeBook) {
      try {
        const dataCreateUser = await UserService.createBook(
          nameBook,
          urlBook,
          resumeBook,
          authorBook,
          imageBook,
          categoriesBook
        )
        if (dataCreateUser) {
          alert('REGISTRO CORRECTO')
          props.navigateFunction('/home')
        } else {
          setErrorCategories('Los datos son incorrectos')
        }
      } catch (error) {
        setErrorCategories('Ha ocurrido un error.')
      }
    } else {
      if (!nameBook) {
        setErrorNameBook('*Campo requerido')
      } else {
        setErrorNameBook('')
      }
      if (!imageBook) {
        setErrorImageBook('*Campo requerido')
      } else {
        setErrorImageBook('')
      }
      if (!authorBook) {
        setErrorAuthorBook('*Campo requerido')
      } else {
        setErrorAuthorBook('')
      }
      if (!resumeBook) {
        setErrorResumeBook('*Campo requerido')
      } else {
        setErrorResumeBook('')
      }
      if (!urlBook) {
        setErrorUrlBook('*Campo requerido')
      } else {
        setErrorUrlBook('')
      }
    }
  }

  return (
    <section className="new-book">
      <Header principalText="Biblioteca"></Header>
      <h2 className="new-book__title">Registro Libro</h2>
      <section className="new-book__container-inputs">
        <div className="new-book__inputs">
          <Input
            placeholder="Ej. Angular + NGRX"
            labelMessage="Nombre del Libro:"
            type="text"
            onChange={(ev) => setNameBook(ev.currentTarget.value)}
            value={nameBook}
            name="nameBook"
            id="nameBook"
            errorMessage={errorNameBook}
          ></Input>
          <Input
            placeholder="Ej. https://book.com"
            labelMessage="URL del Libro:"
            type="text"
            onChange={(ev) => setUrlBook(ev.currentTarget.value)}
            value={urlBook}
            name="urlBook"
            id="urlBook"
            errorMessage={errorUrlBook}
          ></Input>
          <Input
            placeholder="Ej. some resume of the book"
            labelMessage="Resumen del Libro:"
            type="textArea"
            onChange={(ev) => setResumeBook(ev.currentTarget.value)}
            value={resumeBook}
            name="resumeBook"
            id="resumeBook"
            errorMessage={errorResumeBook}
          ></Input>
        </div>
        <div>
          <Input
            placeholder="Ej. somebody"
            labelMessage="Nombre del autor:"
            type="text"
            onChange={(ev) => setAuthorBook(ev.currentTarget.value)}
            value={authorBook}
            name="authorBook"
            id="authorBook"
            errorMessage={errorAuthorBook}
          ></Input>
          <Input
            placeholder="Ej. https://book.jpeg"
            labelMessage="Imagen de portada:"
            type="text"
            onChange={(ev) => setImageBook(ev.currentTarget.value)}
            value={imageBook}
            name="imageBook"
            id="imageBook"
            errorMessage={errorImageBook}
          ></Input>
        </div>
      </section>
      <h2 className="new-book__title">Categorias</h2>
      <section className="new-book__container-checkbox">
        <CheckBox
          categories={categories}
          setErrorCategories={setErrorCategories}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          setCategoriesBook={setCategoriesBook}
        ></CheckBox>
      </section>
      <span className="new-book__error">{errorCategories}</span>
      <div className="new-book__buttons-container">
        <div className="new-book__button">
          <Button color="secondary" size="medium" onClick={() => handleSubmitCancel()}>
            Cancelar
          </Button>
        </div>
        <div className="new-book__button">
          <Button color="primary" size="medium" onClick={() => handleSubmitUpload()}>
            Registrar
          </Button>
        </div>
      </div>
    </section>
  )
}
