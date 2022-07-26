import { useRef } from 'react'
import { Button } from '../atoms/Button/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
export function FormRegister() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfRef = useRef()
  const emailRef = useRef()
  let navigate = useNavigate()
  let location = useLocation()
  const [errorUser, setErrorUser] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPasswordConf, setErrorPasswordConf] = useState('')
  const go = () => {
    setErrorUser('')
    setErrorPassword('')
    setErrorEmail('')
    setErrorPasswordConf('')
    const userName = usernameRef.current.value
    const password = passwordRef.current.value
    const passwordConfirm = passwordConfRef.current.value
    const email = emailRef.current.value
    //alert(userInputRef.current.value + userPasswordRef.current.value)
    if (userName && password && passwordConfirm && email) {
      alert('REGISTRO CORRECTO')
      navigate('/' + location.search)
    } else {
      if (!userName) {
        setErrorUser('*Campo es requerido')
      }
      if (!password) {
        setErrorPassword('*Campo es requerido')
      }
      if (!passwordConfirm) {
        setErrorPasswordConf('*Campo es requerido')
      }
      if (!email) {
        setErrorEmail('*Campo es requerido')
      }
    }
  }
  return (
    <form className="form">
      <input type="text" placeholder="Usuario" ref={usernameRef}></input>
      <span>{errorUser}</span>
      <br></br>
      <input type="text" placeholder="E-mail" ref={emailRef}></input>
      <span>{errorEmail}</span>
      <br></br>
      <input type="password" placeholder="Contrasena" ref={passwordRef}></input>
      <span>{errorPassword}</span>
      <br></br>
      <input type="password" placeholder="Confirmar Contrasena" ref={passwordConfRef}></input>
      <span>{errorPasswordConf}</span>
      <br></br>
      <Button color="primary" size="small" onClick={go}>
        LogIn
      </Button>
    </form>
  )
}
