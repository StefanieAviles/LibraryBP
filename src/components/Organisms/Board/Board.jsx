import './Board.css'
import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { getAllBooks } from '../../../Funciones/Funciones'

export function Board({ setBookById, navigateFunction, locationFunction }) {
  const [books, setBooks] = useState([])
  useEffect(() => {
    getAllBooks(setBooks)
  }, [])
  return (
    <section className="board">
      <Card
        books={books}
        setBookById={setBookById}
        navigateFunction={navigateFunction}
        locationFunction={locationFunction}
      />
    </section>
  )
}
