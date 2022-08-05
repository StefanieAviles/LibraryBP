import { useState, useEffect, FC } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/button'
import { UserService } from '../../../services/user.service'
import { DataLogin } from '../../../interfaces/interfaces'
import './Login.scss'

export interface LogInProps {
  navigateFunction: (value: string) => void
}
export const LogIn: FC<LogInProps> = (props: LogInProps) => {
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

  const handleSubmit = async () => {
    setErr('')
    const userData = { username: email, password: password }
    if (!email) {
      setErrorUser('*Campo requerido')
    }
    if (!password) {
      setErrorPwd('*Campo requerido')
    }
    if (email && password) {
      /*  console.log('AQUII 1:', userData) */
      try {
        const dataUser = await UserService.login(userData)
        /*    console.log('AQUII 2:', dataUser) */
        if (dataUser.username && dataUser.password) {
          localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
          )
          localStorage.setItem('typeToken', 'Bearer')
          props.navigateFunction('/home')
        } else {
          setErr('Los datos son incorrectos')
        }
      } catch (error) {
        /* console.log('AQUII 5:') */
        setErr('Ha ocurrido un error.')
      }
    }
  }

  return (
    <div className="login">
      <main className="login__header">
        <h1 className="login__title"> Iniciar sesión </h1>
        <form className="login__form">
          <Input
            onChange={(ev) => setEmail(ev.currentTarget.value)}
            type="text"
            id="userEmail"
            value={email}
            placeholder="Ej. name@example.com"
            labelMessage="Correo electronico"
            errorMessage={errorUser}
          />

          <Input
            onChange={(ev) => setPassword(ev.currentTarget.value)}
            type="password"
            name="password"
            id="userPassword"
            value={password}
            placeholder="*****"
            errorMessage={errorPwd}
            labelMessage="Contraseña"
          />

          <div className="login__register-section">
            <a href="http://localhost:3000/register"> Registrate aquí </a>
            <Button size="medium" onClick={() => handleSubmit()} color="primary">
              Iniciar Sesion
            </Button>
          </div>
          <span className="login__error-message">{err}</span>
        </form>
      </main>
    </div>
  )
}
