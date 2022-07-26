import axios, { AxiosResponse } from 'axios'
import { DataLogin, Book } from '../interfaces/interfaces'
const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface User {
  username: string
  email: string
  token: string
}

export class UserService {
  static async getUsers() {
    const response = await axios.get<User[]>(API_URL)
    return response.data
  }

  static async login(data: DataLogin) {
    const response = await axios.post(API_URL + 'users/login', data)
    return response.data
  }

  static async createUser(name: string, email: string, password: string) {
    const user = {
      name: name,
      email: email,
      password: password
    }
    const response = await axios.post(API_URL + 'users/', user)
    return response.data
  }

  static async createBook(
    nameBook: string,
    urlBook: string,
    resumeBook: string,
    authorBook: string,
    imageBook: string,
    categoriesBook: string[]
  ) {
    const newBook = {
      title: nameBook,
      author: authorBook,
      resume: resumeBook,
      image: imageBook,
      url: urlBook,
      category: categoriesBook,
      public: true
    }
    const response = await axios.post(API_URL + 'books/owner', newBook, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
      }
    })
    return response.data
  }

  static async getAllBooks() {
    const response: AxiosResponse<{
      count: number
      items: Book[]
    }> = await axios.post(
      API_URL + 'books/filter',
      {},
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
        }
      }
    )
    return response.data
  }

  static booksByCategory = async () => {
    const response = await axios.get(API_URL + 'category')
    return response.data
  }

  static async getBook(id: string) {
    const response = await axios.get(API_URL + `books/owner/${id}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
      }
    })
    return response.data
  }

  static async getBooksFilter(title: string, category: string) {
    const response: AxiosResponse<{
      count: number
      items: Book[]
    }> = await axios.post(
      API_URL + 'books/filter',
      {
        title: title,
        category: category
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Inc3cWZzYTVmMjEiLCJ1c2VybmFtZSI6ImtzdWFyZXoifSwiaWF0IjoxNjU0Mzc1MDE1LCJleHAiOjE2NTQzOTY2MTV9.AeX_NtUGoCEv7LKw8hijQI3shuCpoIatQBtdQUkgWj0'
        }
      }
    )
    console.log(response.data)
    return response.data
  }
}
