import { useRef } from 'react'
import { Button } from '../atoms/Button/Button'
import users from '../../Users.json'
import { useNavigate, useLocation } from 'react-router-dom'

export function Form() {
  const userInputRef = useRef()
  const userPasswordRef = useRef()
  let navigate = useNavigate()
  let location = useLocation()
  const go = () => {
    const userName = userInputRef.current.value
    const password = userPasswordRef.current.value
    let results = users.Users.filter(
      (user) => user.username === userName && user.password === password
    )
    if (results.length > 0) {
      navigate('/home' + location.search)
    } else {
      alert('INCORRECTO')
    }
  }
  return (
    <form className="form">
      <input type="text" placeholder="Usuario" ref={userInputRef}></input>
      <span></span>
      <br></br>
      <input type="password" placeholder="Contrasena" ref={userPasswordRef}></input>
      <span></span>
      <br></br>
      <Button color="primary" size="small" onClick={go}>
        LogIn
      </Button>
    </form>
  )
}
