import './Board.css'
import { booksByCategory } from '../../../Funciones/Funciones'
import React, { useEffect } from 'react'

export function Board() {
  useEffect(() => {
    booksByCategory()
  }, [])
  return <section className="board"></section>
}
