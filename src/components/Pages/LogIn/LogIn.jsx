import { useState, useEffect, EventHandler } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import { UserService } from '../../../services/user.service'
import { DataLogin } from '../../../interfaces/interfaces'
import './Login.css'

export function LogIn({ navigateFunction }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPwd, setErrorPwd] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    setErr('')
    if (email.length <= 5 && email.length > 0) {
      setErrorUser('Minimo 5 caracteres')
    } else {
      setErrorUser('')
    }
    if (password.length <= 5 && password.length > 0) {
      setErrorPwd('Minimo 5 caracteres')
    } else {
      setErrorPwd('')
    }
  }, [email, password])

  const handleSubmit = async (event /* : React.SyntheticEvent */) => {
    event.preventDefault()
    setErr('')
    const userData = { username: email, password: password }
    if (!email) {
      setErrorUser('*Campo requerido')
    }
    if (!password) {
      setErrorPwd('*Campo requerido')
    }
    if (email && password) {
      try {
        const dataUser = await UserService.login(userData)
        if (dataUser) {
          localStorage.setItem('token', dataUser.access_token)
          localStorage.setItem('typeToken', dataUser.tokenType)
          navigateFunction('/home')
        } else {
          setErr('Los datos son incorrectos')
        }
      } catch (error) {
        setErr('Ha ocurrido un error.')
      }
    }
  }

  return (
    <div className="Login">
      <main className="Login-header">
        <h1> Iniciar sesión </h1>
        <form className="userForm">
          <Input
            onChange={(ev) => setEmail(ev.target.value)}
            type="text"
            id="userEmail"
            value={email}
            placeholder="Ej. name@example.com"
            labelMessage="Correo electronico"
            errorMessage={errorUser}
          />

          <Input
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            name="password"
            id="userPassword"
            value={password}
            placeholder="*****"
            errorMessage={errorPwd}
            labelMessage="Contraseña"
          />

          <div className="optionRegister">
            <Link to={'/register'}> Registrate aquí </Link>
            <Button size="medium" onClick={(event) => handleSubmit(event)} color="primary">
              Iniciar Sesion
            </Button>
          </div>
          <span>{err}</span>
        </form>
      </main>
    </div>
  )
}
