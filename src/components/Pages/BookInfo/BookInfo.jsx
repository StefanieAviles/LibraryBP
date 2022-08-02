import { Header } from '../../molecules/Header/Header'
import './BookInfo.css'
import { Button } from '../../atoms/Button/Button'
import { DataBook } from '../../molecules/DataBook/DataBook'

export function BookInfo({ navigateFunction, locationFunction, bookById }) {
  function go(e) {
    e.preventDefault()
    navigateFunction('/home')
  }
  return (
    <>
      <Header></Header>
      <div className="buttons">
        <Button size="medium" color="secondary" onClick={go}>
          Volver
        </Button>
        <Button size="medium" color="primary">
          Editar
        </Button>
      </div>
      <section className="infoContainer">
        <div className="imageDiv">
          <img className="imgDetail" src={bookById.image}></img>
        </div>
        <div className="dataContainer">
          <DataBook text="Titulo" info={bookById.title}></DataBook>
          <DataBook text="Autor" info={bookById.author}></DataBook>
          <DataBook text="URL del libro" info={bookById.url}></DataBook>
          <DataBook text="Resumen" info={bookById.resume}></DataBook>
        </div>
      </section>
    </>
  )
}
