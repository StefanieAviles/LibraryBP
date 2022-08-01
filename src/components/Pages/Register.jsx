import { FormRegister } from '../molecules/FormRegister/FormRegister'

export function Register({ navigateFunction, locationFunction }) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Register</h1>
      <FormRegister
        navigateFunction={navigateFunction}
        locationFunction={locationFunction}
      ></FormRegister>
    </div>
  )
}
