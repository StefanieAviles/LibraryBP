import axios from 'axios'

const booksByCategory = async (state) => {
  const peticion = await axios.get('https://cangular-api.herokuapp.com/category')
  state(peticion.data.results)
}
const allUsers = async () => {
  const peticion = await axios.get('https://cangular-api.herokuapp.com/users/login')
  console.log(peticion.data)
}

export { booksByCategory, allUsers }
