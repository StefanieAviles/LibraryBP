import { emailExists, userExists } from '../Funciones/Funciones'

async function validateEmail(email) {
  if ((await emailExists(email)) === true) {
    return true
  } else {
    return false
  }
}
async function validateUser(user) {
  if ((await userExists(user)) === true) {
    return true
  } else {
    return false
  }
}
function validations(
  user,
  email,
  password,
  passwordConf,
  setErrorUser,
  setErrorEmail,
  setErrorPassword,
  setErrorPasswordConf
) {
  if (user && password && passwordConf && email) {
    if (validateEmail(email) === true) {
      setErrorEmail('*Email ya registrado')
    }
    if (validateUser(user) === true) {
      setErrorUser('*Nombre de usuario ya registrado')
    }
    if (password !== passwordConf) {
      setErrorPassword('*Las contrasenas deben coincidir')
      setErrorPasswordConf('*Las contrasenas deben coincidir')
    }
    if (/* !validateEmail(email) && !validateUser(user) &&  */ password === passwordConf) {
      return true
    }
    return false
  } else {
    if (!user) {
      setErrorUser('*Campo es requerido')
    }
    if (!password) {
      setErrorPassword('*Campo es requerido')
    }
    if (!passwordConf) {
      setErrorPasswordConf('*Campo es requerido')
    }
    if (!email) {
      setErrorEmail('*Campo es requerido')
    }
    return false
  }
}

export { validations }
