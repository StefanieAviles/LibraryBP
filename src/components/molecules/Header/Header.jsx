import { Text } from '../../atoms/Text/Text'
import './Header.css'

export function Header() {
  return (
    <section className="container">
      <div className="divHeader1">
        <Text width="bolder" color="red" value="Biblioteca"></Text>
      </div>
      <div className="divHeader2">
        <Text></Text>
      </div>
    </section>
  )
}
