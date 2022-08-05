import { Header } from '../../molecules/Header/Header'
import './BookInfo.scss'
import { Button } from '../../atoms/Button/Button'
import { DataBook } from '../../molecules/DataBook/DataBook'
import { Book } from '../../../interfaces/interfaces'
import { FC } from 'react'

export interface BookInfoProps {
  navigateFunction: (value: string) => void
  bookById: Book
  setIsEdited: (value: boolean) => void
}
export const BookInfo: FC<BookInfoProps> = (props: BookInfoProps) => {
  function go() {
    props.navigateFunction('/home')
  }
  const handleSubmit = () => {
    props.navigateFunction('/newBook')
    props.setIsEdited(true)
  }
  return (
    <>
      <Header principalText="Biblioteca"></Header>
      <div className="book-info__buttons-div">
        <div className="book-info__button">
          <Button size="medium" color="secondary" onClick={go}>
            Volver
          </Button>
        </div>
        <div className="book-info__button">
          <Button size="medium" color="primary" onClick={() => handleSubmit()}>
            Editar
          </Button>
        </div>
      </div>
      <section className="book-info__info-container">
        <div className="book-info__image-div">
          <img className="book-info__img-detail" src={props.bookById.image}></img>
        </div>
        <div className="book-info__data-container">
          <DataBook text="Titulo" info={props.bookById.title}></DataBook>
          <DataBook text="Autor" info={props.bookById.author}></DataBook>
          <DataBook text="URL del libro" info={props.bookById.url}></DataBook>
          <DataBook text="Resumen" info={props.bookById.resume}></DataBook>
        </div>
      </section>
    </>
  )
}
