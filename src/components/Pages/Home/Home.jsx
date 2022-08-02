import { Header } from '../../molecules/Header/Header'
import { TitleBar } from '../../molecules/TitleBar/TitleBar'
import { SearchBar } from '../../molecules/SearchBar/SearchBar'
import { UserService } from '../../../services/user.service'
import React, { useEffect, useState } from 'react'
import './Home.css'

export function Home({
  setBookById,
  navigateFunction,
  locationFunction,
  searchValue,
  setSearchValue
}) {
  const [books, setBooks] = useState([])
  useEffect(() => {
    UserService.getAllBooks().then((response) => {
      if (response.items.length > 0) {
        setBooks(response.items)
      }
    })
    // getAllBooks(setBooks)
  }, [])
  return (
    <>
      <Header principalText="Biblioteca"></Header>
      <TitleBar
        text="Tus Libros"
        textButton="Agregar Libro"
        buttonColor="secondary"
        buttonSize="medium"
      ></TitleBar>
      <SearchBar></SearchBar>
      <section className="board">
        <section className="card">
          {books.map((option, item) => {
            function showBook() {
              UserService.getBook(option.id)
                .then((response) => {
                  setBookById(response)
                  navigateFunction('/info' + locationFunction.search)
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
