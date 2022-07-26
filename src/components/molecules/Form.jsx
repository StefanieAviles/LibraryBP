import { useRef } from 'react'
import { Button } from '../atoms/Button/Button'
import users from '../../Users.json'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

export function Form() {
  const userInputRef = useRef()
  const userPasswordRef = useRef()
  let navigate = useNavigate()
  let location = useLocation()
  const [errorUser, setErrorUser] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const go = () => {
    setErrorUser('')
    setErrorPassword('')
    const userName = userInputRef.current.value
    const password = userPasswordRef.current.value
    if (!userName) {
      setErrorUser('*Campo es requerido')
    }
    if (!password) {
      setErrorPassword('*Campo es requerido')
    }
    if (userName !== '' && password !== '') {
      let results = users.Users.filter(
        (user) => user.username === userName && user.password === password
      )
      if (results.length > 0) {
        navigate('/home' + location.search)
      } else {
        alert('CREDENCIALES INCORRECTAS')
      }
    }
  }
  return (
    <form className="form">
      <input type="text" placeholder="Usuario" ref={userInputRef}></input>
      <span>{errorUser}</span>
      <br></br>
      <input type="password" placeholder="Contrasena" ref={userPasswordRef}></input>
      <span>{errorPassword}</span>
      <br></br>
      <Button color="primary" size="small" onClick={go}>
        LogIn
      </Button>
    </form>
  )
}
