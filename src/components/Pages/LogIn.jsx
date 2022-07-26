import { Form } from '../molecules/Form'

export function LogIn() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Log In</h1>
      <Form></Form>
      <a href="http://localhost:3000/register">No tienes cuenta: Registrate</a>
    </div>
  )
}
