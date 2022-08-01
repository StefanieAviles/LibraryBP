import axios from 'axios'

const booksByCategory = async (state) => {
  const peticion = await axios.get('https://cangular-api.herokuapp.com/category')
  state(peticion.data)
}

const emailExists = async (email) => {
  const peticion = await axios.get(
    `https://cangular-api.herokuapp.com/users/exist-email?email=${email}`
  )
  console.log(peticion.data.exists)
  return peticion.data.exists
}

const userExists = async (user) => {
  try {
    const peticion = await axios.get(`https://cangular-api.herokuapp.com/users/exist-name/${user}`)
    console.log(peticion.data.exists)
    return peticion.data.exists
  } catch (e) {
    console.log(e)
  }
}

const postLogin = async (user, password) => {
  const userData = { username: user, password: password }
  const peticion = await axios.post('https://cangular-api.herokuapp.com/users/login', userData)
  return peticion.data
}
const getAllBooks = async (state) => {
  axios
    .post(
      'https://cangular-api.herokuapp.com/books/filter',
      {},
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
        }
      }
    )
    .then((res) => {
      state(res.data.items)
    })
    .catch((error) => {
      console.error(error)
    })
}
const getBooksByName = async (name, state) => {
  axios
    .post(
      'https://cangular-api.herokuapp.com/books/filter',
      {},
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
        }
      }
    )
    .then((response) => {
      const reponseFilter = response.dataitems.filter((book) =>
        book.title.toLowerCase().includes(name.toLowercase())
      )
      state(reponseFilter)
    })
    .catch((error) => {
      console.error(error)
    })
}

const getBook = async (id) => {
  const peticion = await axios.get(`https://cangular-api.herokuapp.com/books/owner/${id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
    }
  })
  return peticion.data
}
const createUser = async (name, email, password) => {
  const user = {
    name: name,
    email: email,
    password: password
  }
  const peticion = await axios.post('https://cangular-api.herokuapp.com/users/', user)
  return peticion.data
}
export {
  booksByCategory,
  postLogin,
  getBook,
  createUser,
  getAllBooks,
  emailExists,
  userExists,
  getBooksByName
}
