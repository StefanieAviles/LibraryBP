import './Board.css'
import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { UserService } from '../../../services/user.service'

export function Board({ setBookById, navigateFunction, locationFunction }) {
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
