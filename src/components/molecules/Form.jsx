import { Button } from '../atoms/Button/Button'
import users from '../../Users.json'
import { useState } from 'react'
import { Input } from '../atoms/Input/Input'

export function Form({ navigateFunction, locationFunction }) {
  const [errorUser, setErrorUser] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const go = () => {
    setErrorUser('')
    setErrorPassword('')
    if (!userName) {
      setErrorUser('*Campo es requerido')
    }
    if (!password) {
      setErrorPassword('*Campo es requerido')
    }
    if (userName !== '' && password !== '') {
      console.log(userName + password)
      let results = users.Users.filter(
        (user) => user.username === userName && user.password === password
      )
      console.log(results)
      if (results.length > 0) {
        navigateFunction('/home' + locationFunction.search)
      } else {
        alert('CREDENCIALES INCORRECTAS')
      }
    }
  }
  return (
    <form className="form">
      <label>Correo electronico</label>
      <Input placeholder="Ej. some@example.com" functionSet={setUserName} role="text" />
      <span>{errorUser}</span>
      <br></br>
      <label>Contrasena</label>
      <Input placeholder="******" functionSet={setPassword} role="password" />
      <span>{errorPassword}</span>
      <div className="buttonsContainer">
        <a href="http://localhost:3000/register">Registrate aqui</a>
        <Button color="primary" size="small" onClick={go}>
          Iniciar Sesion
        </Button>
      </div>
    </form>
  )
}
