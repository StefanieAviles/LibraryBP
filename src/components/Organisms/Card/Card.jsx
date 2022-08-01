import './Card.css'
import { getBook } from '../../../Funciones/Funciones'

export function Card({ books, setBookById, navigateFunction, locationFunction }) {
  return (
    <section className="card">
      {books.map((option, item) => {
        function showBook() {
          getBook(option.id)
            .then((response) => {
              console.log(response)
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
  )
}
