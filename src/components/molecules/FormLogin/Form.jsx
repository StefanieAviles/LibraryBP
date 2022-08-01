import { useState, useEffect } from 'react'
import { Input } from '../../atoms/Input/Input'
import { postLogin, existsEmail } from '../../../Funciones/Funciones'

export function Form({ navigateFunction, locationFunction }) {
  const [errorUser, setErrorUser] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const go = (e) => {
    e.preventDefault()
    setErrorUser('')
    setErrorPassword('')
    if (userName !== '' && password !== '') {
      postLogin(userName, password)
        .then(() => {
          navigateFunction('/home' + locationFunction.search)
        })
        .catch(() => {
          alert('credenciales incorrectas')
        })
    }
    if (!userName) {
      setErrorUser('*Campo es requerido')
    }
    if (!password) {
      setErrorPassword('*Campo es requerido')
    }
  }
  return (
    <form className="form">
      <label>Correo electronico</label>
      <Input placeholder="Ej. some@example.com" functionSet={setUserName} type="text" />
      <span>{errorUser}</span>
      <br></br>
      <label>Contrasena</label>
      <Input placeholder="******" functionSet={setPassword} type="password" />
      <span>{errorPassword}</span>
      <div className="buttonsContainer">
        <a href="http://localhost:3000/register">Registrate aqui</a>
        <button onClick={go}> Iniciar Sesion </button>
        {/* <Button color="primary" size="small" onClick={go}>
          Iniciar Sesion
        </Button> */}
      </div>
    </form>
  )
}
