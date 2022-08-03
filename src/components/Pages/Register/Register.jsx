import { Button } from '../../atoms/Button/Button'
import { useState, useEffect } from 'react'
import { UserService } from '../../../services/user.service'
import { Input } from '../../atoms/Input/Input'

export function Register({ navigateFunction }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPasswordConf, setErrorPasswordConf] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    if (email.length <= 5 && email.length > 0) {
      setErrorEmail('Minimo 5 caracteres')
    } else {
      setErrorEmail('')
    }
    if (userName.length <= 5 && userName.length > 0) {
      setErrorUser('Minimo 5 caracteres')
    } else {
      setErrorUser('')
    }
    if (password !== passwordConfirm) {
      setErrorPassword('Las Contraseñas deben coincidir')
      setErrorPasswordConf('Las Contraseñas deben coincidir')
    } else {
      setErrorPassword('')
      setErrorPasswordConf('')
    }
  }, [email, password, userName, passwordConfirm])
  const handleSubmit = async (event) => {
    event.preventDefault()
    setErr('')
    if (!email) {
      setErrorEmail('*Campo requerido')
    }
    if (!password) {
      setErrorPassword('*Campo requerido')
    }
    if (!userName) {
      setErrorUser('*Campo requerido')
    }
    if (!passwordConfirm) {
      setErrorPasswordConf('*Campo requerido')
    }
    if (email && password && userName && passwordConfirm) {
      try {
        const dataCreateUser = await UserService.createUser(userName, email, password)
        if (dataCreateUser) {
          alert('REGISTRO CORRECTO')
          navigateFunction('/')
        } else {
          setErr('Los datos son incorrectos')
        }
      } catch (error) {
        setErr('Ha ocurrido un error.')
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Register</h1>
      <form className="form">
        <Input
          onChange={(ev) => setUserName(ev.currentTarget.value)}
          type="text"
          id="userName"
          value={userName}
          placeholder="Ej. somebody"
          labelMessage="Nombre de usuario"
          errorMessage={errorUser}
        />
        <Input
          onChange={(ev) => setEmail(ev.currentTarget.value)}
          type="text"
          id="userEmail"
          value={email}
          placeholder="Ej. some@email.com"
          labelMessage="Correo electronico"
          errorMessage={errorEmail}
        />
        <Input
          onChange={(ev) => setPassword(ev.currentTarget.value)}
          type="password"
          id="userPassword"
          value={password}
          placeholder="*****"
          errorMessage={errorPassword}
          labelMessage="Contraseña"
        />
        <Input
          onChange={(ev) => setPasswordConfirm(ev.currentTarget.value)}
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          placeholder="*****"
          errorMessage={errorPasswordConf}
          labelMessage="Contraseña"
        />
        <Button size="medium" onClick={(event) => handleSubmit(event)} color="primary">
          Registrarse
        </Button>
        <span>{err}</span>
      </form>
    </div>
  )
}
