import { useRef } from 'react'
import { Button } from '../atoms/Button/Button'
import { useNavigate, useLocation } from 'react-router-dom'
export function FormRegister() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfRef = useRef()
  const emailRef = useRef()
  let navigate = useNavigate()
  let location = useLocation()
  const go = () => {
    const userName = usernameRef.current.value
    const password = passwordRef.current.value
    const passwordConfirm = passwordConfRef.current.value
    const email = emailRef.current.value
    //alert(userInputRef.current.value + userPasswordRef.current.value)
    if (userName && password && passwordConfirm && email) {
      alert('REGISTRO CORRECTO')
      navigate('/' + location.search)
    } else {
      alert('INCORRECTO')
    }
  }
  return (
    <form className="form">
      <input type="text" placeholder="Usuario" ref={usernameRef}></input>
      <span></span>
      <br></br>
      <input type="text" placeholder="E-mail" ref={emailRef}></input>
      <span></span>
      <br></br>
      <input type="password" placeholder="Contrasena" ref={passwordRef}></input>
      <span></span>
      <br></br>
      <input type="password" placeholder="Confirmar Contrasena" ref={passwordConfRef}></input>
      <span></span>
      <br></br>
      <Button color="primary" size="small" onClick={go}>
        LogIn
      </Button>
    </form>
  )
}
