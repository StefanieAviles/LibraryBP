import { Header } from '../../molecules/Header/Header'
import { TitleBar } from '../../molecules/TitleBar/TitleBar'
import { SearchBar } from '../../molecules/SearchBar/SearchBar'
import { UserService } from '../../../services/user.service'
import { Book } from '../../../interfaces/interfaces'
import React, { useEffect, useState, FC } from 'react'
import './Home.css'

export interface HomeProps {
  setBookById: (value: Book) => void
  navigateFunction: (value: string) => void
  searchValue: string
  searchCategoryBook: string
  setSearchValue: (value: string) => void
  setSearchCategoryBook: (value: string) => void
}
export const Home: FC<HomeProps> = (props: HomeProps) => {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    if (!props.searchValue && !props.searchCategoryBook) {
      UserService.getAllBooks().then((response) => {
        if (response.items.length > 0) {
          setBooks(response.items)
        }
      })
    } else {
      UserService.getBooksFilter(props.searchValue, props.searchCategoryBook).then((response) => {
        if (response.items.length > 0) {
          setBooks(response.items)
        }
      })
    }
    // getAllBooks(setBooks)
  }, [props.searchValue, props.searchCategoryBook])
  return (
    <>
      <Header principalText="Biblioteca"></Header>
      <TitleBar
        navigateFunction={props.navigateFunction}
        text="Tus Libros"
        textButton="Agregar Libro"
        buttonColor="secondary"
        buttonSize="medium"
      ></TitleBar>
      <SearchBar
        setSearchValue={props.setSearchValue}
        setSearchCategoryBook={props.setSearchCategoryBook}
      ></SearchBar>
      <section className="board">
        <section className="card">
          {books.map((option: Book, item) => {
            function showBook() {
              UserService.getBook(option.id)
                .then((response) => {
                  props.setBookById(response)
                  props.navigateFunction('/info')
                })
                .catch(() => {})
            }
            return (
              <section key={item} className="book" onClick={showBook}>
                <img className="item" src={option.image}></img>
                <p className="nameBook">{option.title}</p>
                <p className="subtitleBook">{option.subtitle}</p>
              </section>
            )
          })}
        </section>
      </section>
    </>
  )
}
