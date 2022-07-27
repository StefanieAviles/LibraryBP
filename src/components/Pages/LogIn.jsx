import { Form } from '../molecules/Form'

export function LogIn({ navigateFunction, locationFunction }) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Iniciar Sesion</h1>
      <Form navigateFunction={navigateFunction} locationFunction={locationFunction}></Form>
    </div>
  )
}
