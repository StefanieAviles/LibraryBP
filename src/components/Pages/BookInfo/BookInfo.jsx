import { Header } from '../../molecules/Header/Header'
import './BookInfo.css'
import { Button } from '../../atoms/Button/Button'
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
        <div>
          <img src={bookById.image}></img>
        </div>
        <div className="dataContainer">
          <div className="itemInfo">
            <p className="title">Titulo</p>
            <p>{bookById.title}</p>
          </div>
          <div className="itemInfo">
            <p className="title">Autor</p>
            <p>{bookById.author}</p>
          </div>
          <div className="itemInfo">
            <p className="title">URL del libro</p>
            <p>{bookById.url}</p>
          </div>
          <div className="itemInfo">
            <p className="title">Resumen</p>
            <p>{bookById.resume}</p>
          </div>
        </div>
      </section>
    </>
  )
}
