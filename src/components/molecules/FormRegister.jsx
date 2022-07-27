import { Button } from '../atoms/Button/Button'
import { useState } from 'react'
import { Input } from '../atoms/Input/Input'

export function FormRegister({ navigateFunction, locationFunction }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPasswordConf, setErrorPasswordConf] = useState('')
  const go = () => {
    setErrorUser('')
    setErrorPassword('')
    setErrorEmail('')
    setErrorPasswordConf('')
    //alert(userInputRef.current.value + userPasswordRef.current.value)
    if (userName && password && passwordConfirm && email) {
      alert('REGISTRO CORRECTO')
      navigateFunction('/home' + locationFunction.search)
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
      <Input placeholder="Usuario" functionSet={setUserName} set={userName} role="text" />
      <span>{errorUser}</span>
      <br></br>
      <Input placeholder="Email" functionSet={setEmail} set={email} role="text" />
      <span>{errorEmail}</span>
      <br></br>
      <Input placeholder="Contrasena" functionSet={setPassword} set={password} role="password" />
      <span>{errorPassword}</span>
      <br></br>
      <Input
        placeholder="Confirmar contrasena"
        functionSet={setPasswordConfirm}
        set={passwordConfirm}
        role="password"
      />
      <span>{errorPasswordConf}</span>
      <br></br>
      <Button color="primary" size="small" onClick={go}>
        LogIn
      </Button>
    </form>
  )
}
