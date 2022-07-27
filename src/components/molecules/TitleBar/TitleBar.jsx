import { Text } from '../../atoms/Text/Text'
import { Button } from '../../atoms/Button/Button'
import './TitleBar.css'

export function TitleBar() {
  return (
    <section className="containerTitle">
      <div className="divTitle1">
        <Text value="Tus libros"></Text>
      </div>
      <div className="divTitle2">
        <Button color="secondary" size="medium">
          Agregar Libro
        </Button>
      </div>
    </section>
  )
}
